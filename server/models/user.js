import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  username: { type: String, unique: true },
  name: { type: String, default: '' },
  picture: { type: String, default: '' },
  oauthID: { type: Number },
  active: { type: Boolean, default: true },
});

userSchema.methods.getPublicFields = function () {
  var returnObject = {
    name: this.name,
    picture: this.picture,
    username: this.username
  };
  return returnObject;
};

export default mongoose.model('User', userSchema);
