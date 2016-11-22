import mongoose from 'mongoose';
// import ListItem from './listItem';
const Schema = mongoose.Schema;

const listSchema = new Schema({
  cuid: { type: 'String', required: true },
  name: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateModified: { type: 'Date', default: Date.now, required: false },
});

export default mongoose.model('List', listSchema);
