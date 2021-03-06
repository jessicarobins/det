import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pendingItemSchema = new Schema({
  text: { type: 'String', required: true },
  _lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
  action: { type: 'String', default: 'create' },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('PendingItem', pendingItemSchema);
