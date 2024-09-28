import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'; // Fixed import path
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js'; // Fixed import path
import dotenv  from 'dotenv'; // Added import statement
import path  from 'path'; // Added import statement

import cors from 'cors';

dotenv.config(); // Added this line
const app = express();

// Set strictQuery option for Mongoose (to avoid deprecation warnings)
mongoose.set('strictQuery', true);

// Connect to MongoDB using mongoose
mongoose.connect("mongodb://localhost:27017/mern-stack")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const __dirname = path.resolve();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

// Enable CORS for cross-origin requests
app.use(cors()); // Allow all origins

// Set up the routes
app.use("/api/user", userRouter);  // User-related requests
app.use("/api/auth", authRouter);  // Authentication-related requests
app.use("/api/listing", listingRouter);  // Listing-related requests

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
