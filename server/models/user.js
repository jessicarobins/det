import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  tokens: Array,
  name: { type: String, default: '' },
  picture: { type: String, default: '' },
  oauthID: { type: Number },
  active: { type: Boolean, default: true },
});

export default mongoose.model('User', userSchema);
