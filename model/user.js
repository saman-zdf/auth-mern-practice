import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please provide a name'] },
  email: { type: String, required: [true, 'Please provide email'] },
  password: { type: String, required: [true, 'Please provide password'] },
});

// hashing password pre save, it has to be async function, it should use traditional function in order to use "this" keyword
UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// reusable function for creating token in diff auth controller
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (pass) {
  const matchPass = await bcrypt.compare(pass, this.password);
  return matchPass;
};

const User = mongoose.model('User', UserSchema);
export default User;
