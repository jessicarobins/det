import mongoose from 'mongoose';
import * as Q from 'q';
mongoose.Promise = Q.Promise;
import ListItem from './listItem';
import ListTemplate from './listTemplate';
import PendingItem from './pendingItem';
const Schema = mongoose.Schema;
import * as _ from 'lodash';

const LIST_THRESHOLD = 1;

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

listSchema.methods.addListItem = function(item, user) {
  let list = this;
  
  if (_.find(list.items, (i) => _.toLower(i.text) === _.toLower(item))) {
    return Q.reject(`This list already contains ${item}`);
  }
  
  //add item to this list no matter what
  const newItem = new ListItem({text: item});
  list.items.push(newItem);
  
  //find listtemplate
  return ListTemplate.findOne({_id: this._template}).exec()
    .then((template) => {
      
      //if there is no template
      // don't do anything else
      if(!template) {
        return Q.reject('no template');
      }
      
      //if the template was created by the current user
      // bypass the threshold and add it to everything immediately
      if(template.createdBy && user._id.equals(template.createdBy)) {
        return template.addItemToLists(item, [list._id]);
      }
      
      //find the pending item with that text
      const lowercaseText = _.toLower(item);
      const pendingItem = _.find(template.pendingItems, {text: lowercaseText});
      
      //if there is no pending item, create one, then do nothing
      if(!pendingItem) {
        template.pendingItems.push(new PendingItem({text: lowercaseText, _lists: [list._id]}));
        return template.save();
      }
      //what if pending items already includes this list?
      // do nothing
     
      else if(_.find(pendingItem._lists, o => o.equals(list._id))){
        //don't even save the list - item is a dupe
        return Q.reject('This list already contains this item.');
      }
      //if we have less than the threshold, just add the list id
      else if(pendingItem._lists.length < LIST_THRESHOLD) {
        pendingItem._lists.push(list._id);
        return pendingItem.save();
      }
      //we've met the threshold, add the item to the template
      // and update all the lists
      else {
        //add the list id anyway so that we don't
        // double-add the item
        pendingItem._lists.push(list._id);
        return template.realizePendingItem(pendingItem);
      }
    })
    .then( () => {
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

listSchema.methods.deleteListItem = function(_id) {
  this.items.id(_id).remove();
  return this.save();
};

listSchema.statics.demoLists = function() {
  return [
    {name: 'watch every Harry Potter movie'},
    {name: 'visit every castle in Scotland'},
    {name: 'read every Stephen King novel'},
    {name: 'run a 5k in every US state'},
    {name: 'visit every country in Europe'},
    {name: 'visit every continent'}
  ];
};

listSchema.set('toJSON', { virtuals: true });

export default mongoose.model('List', listSchema);
