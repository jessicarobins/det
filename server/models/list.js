import mongoose from 'mongoose';
import * as Q from 'q';
mongoose.Promise = Q.Promise;
import ListItem from './listItem';
import ListTemplate from './listTemplate';
const Schema = mongoose.Schema;
import * as _ from 'lodash';

const listSchema = new Schema({
  cuid: { type: 'String', required: true },
  verb: { type: 'String', required: true },
  action: { type: 'String', required: true },
  _template: { type: Schema.Types.ObjectId, ref: 'ListTemplate' },
  items: [ListItem.schema],
  _users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', default: Date.now, required: false },
});

listSchema.virtual('name').get( function() {
  return `${this.verb} every ${this.action}`;
});

listSchema.virtual('percentComplete').get( function() {
  const numItems = this.items.length;
  const numComplete = _.filter(this.items, 'complete').length;
  return _.round(numComplete*100/numItems) || 0;
});

listSchema.query.forUser = function(user) {
  return this.find({_users: user._id});
};

listSchema.methods.addListItem = function(item) {
  let list = this;
  //update listtemplate
  return ListTemplate.findOne({_id: this._template}).exec()
    .then((template) => {
      if(!template) {
        return Q.reject();
      }
      const newItem = new ListItem({text: item});
      list.items.push(newItem);
      template.items.push(newItem);
      template.save();
      list.addItemToOtherLists(item);
      return list.save();
    })
    .then( (newList) => {
      return newList;
    })
    .catch( (err) => {
      console.log(err);
      return Q.reject(err);
    });
};

listSchema.methods.addItemsFromTemplate = function(template, cb) {
  this.items = _.clone(template.items);
  this._template = template._id;
  return this.save(cb);
};

listSchema.methods.addItemToOtherLists = function(itemText) {
  
  this.constructor.find({_template: this._template, _id: { $ne: this._id }}).exec()
    .then( (lists) => {
      lists.forEach( (list) => {
        list.items.push(new ListItem({text: itemText}));
        list.save();
      });
    });
};

listSchema.statics.demoLists = function() {
  return [
    {name: 'watch every Harry Potter movie'},
    {name: 'visit every castle in Scotland'},
    {name: 'read every Stephen King novel'},
    {name: 'run a 5k in every US state'},
    {name: 'visit every country in Europe'}
  ];
};

listSchema.set('toJSON', { virtuals: true });

export default mongoose.model('List', listSchema);
