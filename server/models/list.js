import mongoose from 'mongoose';
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

listSchema.methods.addListItem = function(item, cb) {
  let list = this;
  //update listtemplate
  ListTemplate.findOne({_id: this._template})
    .exec( (err, template) => {
      if (err || !template) {
        console.log(err)
      }
      else {
        const newItem = new ListItem({text: item});
        list.items.push(newItem);
        template.items.push(newItem);
        template.save();
        return list.save(cb);
      }
    });
};

listSchema.methods.addItemsFromTemplate = function(template, cb) {
  this.items = _.clone(template.items);
  this._template = template._id;
  return this.save(cb);
};

listSchema.set('toJSON', { virtuals: true });

export default mongoose.model('List', listSchema);
