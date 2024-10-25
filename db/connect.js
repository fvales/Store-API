import mongoose from 'mongoose';

export const connectDB = (connectionString) => {
  return mongoose.connect(connectionString);
};
