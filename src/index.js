import connectDB from "./db/index.js";

console.log("hello");
connectDB()
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{
    console.error("Database connection failed:", err.message);
    process.exit(1);
})