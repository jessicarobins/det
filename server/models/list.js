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

listSchema.set('toJSON', { virtuals: true });

export default mongoose.model('List', listSchema);
