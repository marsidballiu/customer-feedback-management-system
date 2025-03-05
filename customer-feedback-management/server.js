// Import required packages
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize the app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Enable Cross-Origin Request Sharing (CORS)

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Hello, Customer Feedback Management System!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
