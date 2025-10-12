import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';
// Import routes
import authRoutes from '../routes/auth.js';
import todoRoutes from '../routes/todo.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    error: 'Too many requests from this IP'
  }
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '1mb' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: '✅ Modern Todo API is running!',
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    features: ['ES6+', 'JWT Auth', 'Rate Limiting', 'Helmet Security']
  });
});

// 404 handler - using arrow function
// 404 handler - use a proper path or remove the path entirely
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});
// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  
  const response = process.env.NODE_ENV === 'production' 
    ? { success: false, message: 'Internal server error' }
    : { success: false, message: error.message, stack: error.stack };
  
  res.status(500).json(response);
});

// Start server with modern syntax
app.listen(PORT, () => {
  console.log(`🚀 Modern Todo API running on http://localhost:${PORT}`);
  // console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
});