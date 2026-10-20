import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log("DB connection failed:", err.message);
  }
};

export { connectDB };