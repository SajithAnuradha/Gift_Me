import mongoose from "mongoose";



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL );
    console.log('DB connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
