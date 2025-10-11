// server.js
import express, { json } from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(json());

// In-memory database (for learning)

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to my first API!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});