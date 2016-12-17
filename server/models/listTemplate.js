import mongoose from 'mongoose';
import * as Q from 'q';
mongoose.Promise = Q.Promise;
import List from './list';
import ListItem from './listItem';
import PendingItem from './pendingItem';
const Schema = mongoose.Schema;
import hasha from 'hasha';
import * as _ from 'lodash';

const listTemplate = new Schema({
  actions: [String],
  items: [ListItem.schema],
  pendingItems: [PendingItem.schema],
  sha: { type: 'String' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', default: Date.now, required: false },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

listTemplate.virtual('name').get( function() {
  return this.actions[0];
});

listTemplate.pre('save', function(next) {
  //update sha
  if(this.items){
    this.sha = hasha( _.map(this.items, 'text'));
  }
  else {
    this.sha = undefined;
  }
  next();
});

listTemplate.methods.addListItems = function(items, cb) {
  let newItem;
  items.forEach( (item) => {
    newItem = new ListItem({text: item});
    this.items.push(newItem);
  });
  return this.save(cb);
};

listTemplate.query.byItems = function(items) {
  //create sha
  const itemSha = hasha(items);
  return this.findOne({ sha: itemSha });
};

listTemplate.statics.newWithItems = function(action, items) {
  const newTemplate = new this({
    actions: [action],
  });
  newTemplate.sha = hasha(items);
  newTemplate.addListItems(items);
  return newTemplate;
}

listTemplate.methods.realizePendingItem = function(pendingItem) {
  
  const template = this;
  template.items.push(new ListItem({text: pendingItem.text}));
  
  List.find({_template: template._id, _id: { $nin: pendingItem._lists }}).exec()
    .then( (lists) => {
      lists.forEach( (list) => {
        list.items.push(new ListItem({text: pendingItem.text}));
        list.save();
      });
    })
    .catch( (err) => {
      console.log('an error? ', err)
    })
    
    pendingItem.remove();
    return template.save();
};

listTemplate.methods.removeItem = function(pendingItem) {
  const item = _.find(this.items, item => _.toLower(item.text) === _.toLower(pendingItem.text));
  item.remove();
  pendingItem.remove();
  return this.save();
};

listTemplate.methods.addItem = function(itemText, exceptLists) {
  const template = this;
  template.items.push(new ListItem({text: itemText}));
  
  let promises = [template.save()];
  
  return List.find({_template: this._id, _id: { $nin: exceptLists }}).exec()
    .then( (lists) => {
      lists.forEach( (list) => {
        list.items.push(new ListItem({text: itemText}));
        promises.push(list.save());
      });
      return Q.all(promises);
    })
    .catch( (err) => {
      console.log('an error? ', err);
      return Q.reject(err);
    });
};

listTemplate.set('toJSON', { virtuals: true });

export default mongoose.model('ListTemplate', listTemplate);
