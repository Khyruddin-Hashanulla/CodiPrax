import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function formHandler(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in successfully 🚀");
    navigate("/");
  }

  return (
    <motion.form
      onSubmit={submitHandler}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      {/* Email */}
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-300">Email Address</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={formHandler}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </label>

      {/* Password */}
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-300">Password</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={formHandler}
          placeholder="••••••••"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </label>

      {/* Forgot Password */}
      <div className="text-right">
        <button
          type="button"
          className="text-sm text-emerald-600 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 w-full bg-emerald-600 text-white py-2.5 rounded-lg
        font-semibold hover:bg-emerald-700 transition-all"
      >
        Login
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="h-px bg-gray-300 flex-1" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="h-px bg-gray-300 flex-1" />
      </div>

      {/* Redirect */}
      <p className="text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-emerald-600 font-medium cursor-pointer hover:underline"
        >
          Sign up
        </span>
      </p>
    </motion.form>
  );
};

export default LoginForm;
