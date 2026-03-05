import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      (email === "admin@smarthr.com" && password === "admin123") ||
      (email === "superadmin@smarthr.com" && password === "super123")
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#eef1f5] flex items-center justify-center">
      <div className="w-[400px] bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        
        {/* Logo */}
        <div className="w-14 h-14 mx-auto mb-4 bg-slate-900 rounded-xl flex items-center justify-center text-white text-xl">
          👥
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl font-bold mb-1 text-gray-900">
          SmartHR
        </h1>

        <p className="text-center text-sm text-gray-500 mb-8">
          Sign in to your account
        </p>

        {/* Form */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-3 mb-4 rounded-lg border border-gray-200 bg-gray-100 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-3 mb-5 rounded-lg border border-gray-200 bg-gray-100 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition"
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-slate-900 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 mb-5 hover:bg-slate-800 transition"
          >
            <FiLock size={16} />
            Sign In
          </button>
        </div>

        {/* Demo Box */}
        <div className="bg-gray-100 p-4 rounded-lg text-xs text-gray-700">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <div>
            <strong>Admin:</strong> admin@smarthr.com / admin123
          </div>
          <div>
            <strong>SuperAdmin:</strong> superadmin@smarthr.com / super123
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;