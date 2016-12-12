import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pendingItemSchema = new Schema({
  text: { type: 'String', required: true },
  _lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('PendingItem', pendingItemSchema);
