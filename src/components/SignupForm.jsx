import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account created successfully 🎉");
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
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-300">First Name</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={formHandler}
            placeholder="Khyruddin"
            required
            className="px-4 py-2 rounded-lg border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-300">Last Name</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={formHandler}
            placeholder="Hashanulla"
            required
            className="px-4 py-2 rounded-lg border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </label>
      </div>

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
          className="px-4 py-2 rounded-lg border border-gray-300
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
          className="px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </label>

      {/* Confirm Password */}
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-300">
          Confirm Password
        </span>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={formHandler}
          placeholder="••••••••"
          required
          className="px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 w-full bg-emerald-600 text-white py-2.5 rounded-lg
        font-semibold hover:bg-emerald-700 transition-all"
      >
        Create Account
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="h-px bg-gray-300 flex-1" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="h-px bg-gray-300 flex-1" />
      </div>

      {/* Redirect */}
      <p className="text-center text-sm text-gray-400">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-emerald-600 font-medium cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </motion.form>
  );
};

export default SignupForm;
