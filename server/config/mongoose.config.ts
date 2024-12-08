import mongoose from 'mongoose';

// connect database mongoDB 
export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri); // connect uri
    console.log("Connected Database");
  } catch (error) {
    console.error(error.message);
  }
}