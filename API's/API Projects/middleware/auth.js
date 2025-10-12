import jwt from 'jsonwebtoken';
import { users } from '../data/database.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-modern-secret-key';

// Middleware to verify JWT token
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Modern optional chaining

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }

    // Verify user still exists
    const userExists = users.find(u => u.id === user.userId);
    if (!userExists) {
      return res.status(403).json({
        success: false,
        message: 'User no longer exists'
      });
    }

    req.user = user;
    next();
  });
};

// Generate JWT token with modern syntax
export const generateToken = (userId, email) => 
  jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '24h' });