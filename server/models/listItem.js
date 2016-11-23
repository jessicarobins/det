import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
  text: { type: 'String', required: true },
  complete: { type: 'Boolean', default: false, required: false },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', default: Date.now, required: false },
});

export default mongoose.model('ListItem', listItemSchema);
