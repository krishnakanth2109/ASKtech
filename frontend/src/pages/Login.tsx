import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// Firebase
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Login(): JSX.Element {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let userCredential;

      // 🔥 SIGNUP
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(userCredential.user, {
          displayName: name,
        });

      } else {
        // 🔥 LOGIN
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      const user = userCredential.user;

      // 🔑 GET TOKEN
      const token = await user.getIdToken();

      // ✅ STORE TOKEN (🔥 MOST IMPORTANT FIX)
      sessionStorage.setItem("token", token);

      // 🔁 SEND TO BACKEND
      const response = await fetch(
        "http://localhost:5000/api/auth/firebase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      const data = await response.json();
      console.log("🔥 Backend response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Auth failed");
      }

      // ✅ STORE ROLE (fallback safety)
      const role = data.role || "user";
      sessionStorage.setItem("role", role);

      // ✅ REDIRECT
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already exists. Please login.");
      } else {
        setError(err.message || "Authentication failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4">
      <div className="max-w-md w-full bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 p-3 rounded-lg mb-4 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {isSignup && (
            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] hover:opacity-90 transition"
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Sign Up"
              : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 text-indigo-400 cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}