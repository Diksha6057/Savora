import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://Food_Website:food@ac-bbobydq-shard-00-00.88yxxvk.mongodb.net:27017,ac-bbobydq-shard-00-01.88yxxvk.mongodb.net:27017,ac-bbobydq-shard-00-02.88yxxvk.mongodb.net:27017/food-del?ssl=true&replicaSet=atlas-alslj0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

export { connectDB };