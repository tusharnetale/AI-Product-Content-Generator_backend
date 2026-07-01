import mongoose from "mongoose";

const connectDB = async () => {
  try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfull");
    } catch (error) {
        console.log("MongoDB Connection Failed + Not-Happy", error);
        
    };
};

export default connectDB;