import mongoose from 'mongoose';

const connectDB = (url) => {
  console.log('database connected');
  return mongoose.connect(url);
};

export default connectDB;
