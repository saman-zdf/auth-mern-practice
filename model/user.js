import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide a name'] },
  email: { type: String, required: [true, 'Please provide email'] },
  password: { type: String, required: [true, 'Please provide password'] },
});

const User = mongoose.model('User', UserSchema);
export default User;
