import admin from '../config/firebase.js';

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify token with Firebase
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Attach user info to the request object
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Firebase Auth Error:', error.message);
    return res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
  }
};