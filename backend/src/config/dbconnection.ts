import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
export default app;

// ENV CONFIGURATION
dotenv.config();

// const MONGO_URI = "mongodb+srv://butong1234:1234@http://cluster0.f0ptkpt.mongodb.net/Cluster0?retryWrites=true&w=majority";
const MONGO_URI = "mongodb+srv://dixiemolleda:wFT5M9QWazKu2-k@cluster0.gcfngyh.mongodb.net/?retryWrites=true&w=majority";


// DATABASE CONNECTION
export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB.');
  } catch (err) {
    throw err;
  }
};

export const checkConnection = mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


