// routes/authRoutes.js
import express from "express";
import admin from "../config/firebase.js";
import User from "../models/User.js";

const router = express.Router();

/**
 * 🔐 Firebase Auth Handler (Login + Signup)
 */
router.post("/firebase", async (req, res) => {
  const { token } = req.body;

  try {
    // ✅ Verify Firebase ID Token
    const decodedToken = await admin.auth().verifyIdToken(token);

    const { uid, email } = decodedToken;

    // ✅ Check if user exists in MongoDB
    let user = await User.findOne({ firebaseUid: uid });

    // ✅ If not → create new user
    // routes/authRoutes.js

if (!user) {
  user = new User({
    firebaseUid: uid,
    email,
    role: email === "youradmin@gmail.com" ? "admin" : "user",
  });

  await user.save();
}

    // ✅ Send role to frontend
    return res.status(200).json({
      message: "Authenticated",
      role: user.role,
    });

  } catch (error) {
    console.error("Firebase auth error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

router.post("/make-admin", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOneAndUpdate(
    { email },
    { role: "admin" },
    { new: true }
  );

  res.json(user);
});

export default router;