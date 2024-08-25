import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sajithanuradha860:443556@cluster0.gwmnair.mongodb.net/foode-ord');
    console.log('DB connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
