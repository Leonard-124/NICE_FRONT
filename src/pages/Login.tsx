
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", form);
      const { accessToken, refreshToken, role } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("role", role);
      setMessage("✅ Login successful");
      navigate("/profile");
    } catch (err: any) {
      setMessage("❌ " + (err.response?.data?.error || "Login failed"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            type="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.includes("✅")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-indigo-600 font-medium hover:underline"
            >
              Sign up
            </button>
          </p>
          <button
            onClick={() => navigate("/forgot-password")}
            className="mt-2 text-indigo-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// const Login = () => {
//   return (
//     <div>
//       <h1>Welcome to Login Page.</h1>
//     </div>
//   )
// }

// export default Login
