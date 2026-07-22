import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Food_Website:Dik0614@cluster0.88yxxvk.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };