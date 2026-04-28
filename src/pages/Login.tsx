
// //////////////////////////////////////////////
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";


// export const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [needsVerification, setNeedsVerification] = useState(false);

//   interface LoginFormData {
//     username: string;
//     password: string;
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setFormData({ ...formData, [e.target.name]: e.target.value } as LoginFormData);
//     setError("");
//     setNeedsVerification(false);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!formData.username || !formData.password) {
//       setError("All fields are required");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
//         formData
//       );

//       // Store tokens
//       localStorage.setItem("accessToken", res.data.accessToken);
//       localStorage.setItem("refreshToken", res.data.refreshToken);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // Redirect based on role
//       if (res.data.user.role === "admin") {
//         navigate("/admin/dashboard");
//       } else if (res.data.user.role === "manager") {
//         navigate("/manager/dashboard");
//       } else {
//         navigate("/profile");
//       }
//     } catch (err) {
//       if ((err as any).response?.data?.needsVerification) {
//         setNeedsVerification(true);
//         setError("Please verify your email before logging in.");
//       } else {
//         setError(
//           (err as any).response?.data?.error || "Login failed. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendVerification = async () => {
//     try {
//       await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/auth/resend-verification`,
//         { email: formData.username }
//       );
//       alert("Verification email sent! Please check your inbox.");
//     } catch (err) {
//       alert("Failed to resend verification email.");
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
//         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//           <div>
//             <h2 className="text-center text-3xl font-bold text-gray-900">
//               Sign in to your IBONNIS account.
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link
//                 to="/signup"
//                 className="font-medium text-blue-600 hover:text-blue-500"
//               >
//                 Sign up
//               </Link>
//             </p>
//           </div>

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
//               <p>❌ {error}</p>
//               {needsVerification && (
//                 <button
//                   onClick={handleResendVerification}
//                   className="text-sm text-blue-600 hover:underline mt-2"
//                 >
//                   Resend verification email
//                 </button>
//               )}
//             </div>
//           )}

//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                   Username or Email
//                 </label>
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter username or email"
//                   disabled={loading}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="••••••••"
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm font-medium text-blue-600 hover:text-blue-500"
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  HiAtSymbol,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiFingerPrint,
  // HiArrowRight,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  interface LoginFormData {
    username: string;
    password: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value } as LoginFormData);
    setError("");
    setNeedsVerification(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        formData
      );

      // Store tokens
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (remember) {
        localStorage.setItem("rememberMe", "1");
      } else {
        localStorage.removeItem("rememberMe");
      }

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (res.data.user.role === "manager") {
        navigate("/manager/dashboard");
      } else {
        navigate("/profile");
      }
    } catch (err: any) {
      if (err?.response?.data?.needsVerification) {
        setNeedsVerification(true);
        setError("Please verify your email before logging in.");
      } else {
        setError(err?.response?.data?.error || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/resend-verification`,
        { email: formData.username }
      );
      alert("Verification email sent! Please check your inbox.");
    } catch (err) {
      alert("Failed to resend verification email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Sign in to your <span className="text-red-700 tracking-[-3px] font-mono">Ibonnis</span> account</h2>
          <p className="mt-2 text-sm text-gray-600">
            New to Ibonnis?{" "}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Create an account
            </Link>
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-100 p-3 text-sm text-red-700">
            <div className="flex items-start justify-between gap-4">
              <div>{error}</div>
              {needsVerification && (
                <button
                  onClick={handleResendVerification}
                  className="text-xs text-blue-600 hover:underline"
                >
                  Resend verification
                </button>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="sr-only">
              Username or Email
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiAtSymbol className="w-5 h-5" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                placeholder="Email or username"
                disabled={loading}
                aria-label="Username or email"
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <HiLockClosed className="w-5 h-5" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                placeholder="Password"
                disabled={loading}
                aria-label="Password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={remember}
                onChange={() => setRemember((r) => !r)}
              />
              Remember me
            </label>

            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                <HiFingerPrint className="w-5 h-5" />
                Sign in
              </>
            )}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              onClick={() => alert("Continuing with Google...")}
              className="inline-flex items-center justify-center gap-2 py-2 px-3 border rounded-lg bg-white hover:bg-gray-50 shadow-sm"
            >
              <HiOutlineGlobeAlt className="w-5 h-5 text-gray-700" />
              <span className="text-sm text-gray-700">Google</span>
            </button>
            <button
              onClick={() => alert("Setting up Github...")}
              className="inline-flex items-center justify-center gap-2 py-2 px-3 border rounded-lg bg-white hover:bg-gray-50 shadow-sm"
            >
              <HiOutlineGlobeAlt className="w-5 h-5 text-gray-700" />
              <span className="text-sm text-gray-700">GitHub</span>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          By signing in you agree to our{" "}
          <Link to="/terms" className="underline hover:text-gray-700">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="underline hover:text-gray-700">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


