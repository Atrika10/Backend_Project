import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    console.log("Connecting to MongoDB...");
    console.log(`MongoDB URI: ${process.env.MONGODB_URI}/${DB_NAME}`);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
    }
}

export default connectDB;