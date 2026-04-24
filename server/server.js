import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 🛡️ PRODUCTION CORS CONFIGURATION
// ==========================================

// 1. Define all allowed origins here
const allowedOrigins = [
  'https://asktechsol.netlify.app', // Your production frontend
  'http://localhost:3000',          // Localhost for React dev
  'http://localhost:5173' ,
  'https://asktechnologies.in'// Localhost for Vite dev (optional)
];

const corsOptions = {
  // 2. Pass the array to the origin property
  origin: allowedOrigins, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Necessary if sending cookies or Auth headers
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    
    // Start Server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🔒 CORS is configured. Allowed origins: ${allowedOrigins.join(', ')}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Error:', error.message);
  });
