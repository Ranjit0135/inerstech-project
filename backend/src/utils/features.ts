import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/inerstech", {
      dbName: "inerstech",
    })
    .then((data) => {
      console.log(`MongoDB connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
};
