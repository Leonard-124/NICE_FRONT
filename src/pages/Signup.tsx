


// // Components/Auth/Register.jsx
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);


//   interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

//   const handleChange = (e: HandleChangeEvent) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const validateForm = () => {
//     if (!formData.username || !formData.email || !formData.password) {
//       setError("All fields are required");
//       return false;
//     }

//     if (formData.username.length < 3) {
//       setError("Username must be at least 3 characters");
//       return false;
//     }

//     if (formData.password.length < 8) {
//       setError("Password must be at least 8 characters");
//       return false;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setError("Please enter a valid email");
//       return false;
//     }

//     return true;
//   };

//   interface RegisterPayload {
//     username: string;
//     email: string;
//     password: string;
//   }

//   interface AxiosErrorResponse {
//     error?: string;
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//       e.preventDefault();
      
//       if (!validateForm()) return;

//       setLoading(true);
//       setError("");

//       try {
//         await axios.post(
//           `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
//           {
//             username: formData.username,
//             email: formData.email,
//             password: formData.password,
//           } as RegisterPayload
//         );

//         setSuccess(true);
//         setTimeout(() => {
//           navigate("/login");
//         }, 3000);
//       } catch (err: unknown) {
//         let message: string = "Registration failed. Please try again.";
//         if (axios.isAxiosError(err)) {
//           const data = err.response?.data as AxiosErrorResponse | undefined;
//           message = data?.error || message;
//         } else if (err instanceof Error) {
//           message = err.message;
//         }
//         setError(message);
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
//         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//           <div>
//             <h2 className="text-center text-3xl font-bold text-gray-900">
//               Create your account
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="font-medium text-blue-600 hover:text-blue-500"
//               >
//                 Sign in
//               </Link>
//             </p>
//           </div>

//           {success && (
//             <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
//               <p className="font-medium">✅ Registration successful!</p>
//               <p className="text-sm mt-1">
//                 Please check your email to verify your account. Redirecting to login...
//               </p>
//             </div>
//           )}

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
//               ❌ {error}
//             </div>
//           )}

//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                   Username
//                 </label>
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="johndoe"
//                   disabled={loading || success}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="john@example.com"
//                   disabled={loading || success}
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
//                   disabled={loading || success}
//                 />
//                 <p className="mt-1 text-xs text-gray-500">
//                   Must be at least 8 characters
//                 </p>
//               </div>

//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                   Confirm Password
//                 </label>
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="••••••••"
//                   disabled={loading || success}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading || success}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? "Creating account..." : "Create account"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
//  export default Signup;
/////////////////////////////////////////////////////////

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Tests/components/Home/Header";
import Footer from '../../Tests/components/Home/Footer';
import Login from '../../Tests/Auth/Login';
import {
  HiUser,
  HiAtSymbol,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiCheckCircle,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return false;
    }

    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }

    return true;
  };

  interface RegisterPayload {
    username: string;
    email: string;
    password: string;
  }

  interface AxiosErrorResponse {
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        } as RegisterPayload
      );

      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: unknown) {
      let message: string = "Registration failed. Please try again.";
      if (axios.isAxiosError(err)) {
        const data = err.response?.data as AxiosErrorResponse | undefined;
        message = data?.error || message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="absolute inset-0 pointer-events-none">
    //     <div className="w-full h-64 sm:h-80 bg-[url('/src/assets/images/learn.jpg')] bg-cover bg-center opacity-10"></div>
    //   </div>

    //   <div className="relative w-full max-w-md space-y-6">
    //     <div className="text-center mb-2">
    //       <h2 className="text-3xl font-extrabold text-gray-900">Create your Ibonnis account</h2>
    //       <p className="mt-2 text-sm text-gray-600">
    //         Already have an account?{" "}
    //         <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
    //           Sign in
    //         </Link>
    //       </p>
    //     </div>

    //     <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
    //       {success ? (
    //         <div className="flex flex-col items-center gap-3">
    //           <div className="rounded-full bg-green-100 p-3">
    //             <HiCheckCircle className="w-8 h-8 text-green-600" />
    //           </div>
    //           <h3 className="text-xl font-semibold text-gray-900">Registration successful!</h3>
    //           <p className="text-sm text-gray-600 text-center">
    //             Please check your email to verify your account. Redirecting to login...
    //           </p>
    //         </div>
    //       ) : (
    //         <>
    //           {error && (
    //             <div className="mb-4 rounded-md bg-red-50 border border-red-100 p-3 text-sm text-red-700">
    //               {error}
    //             </div>
    //           )}

    //           <form onSubmit={handleSubmit} className="space-y-4">
    //             <div>
    //               <label htmlFor="username" className="sr-only">
    //                 Username
    //               </label>
    //               <div className="relative">
    //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
    //                   <HiUser className="w-5 h-5" />
    //                 </div>
    //                 <input
    //                   id="username"
    //                   name="username"
    //                   type="text"
    //                   value={formData.username}
    //                   onChange={handleChange}
    //                   className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
    //                   placeholder="Username"
    //                   disabled={loading}
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label htmlFor="email" className="sr-only">
    //                 Email address
    //               </label>
    //               <div className="relative">
    //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
    //                   <HiAtSymbol className="w-5 h-5" />
    //                 </div>
    //                 <input
    //                   id="email"
    //                   name="email"
    //                   type="email"
    //                   value={formData.email}
    //                   onChange={handleChange}
    //                   className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
    //                   placeholder="you@example.com"
    //                   disabled={loading}
    //                 />
    //               </div>
    //             </div>

    //             <div>
    //               <label htmlFor="password" className="sr-only">
    //                 Password
    //               </label>
    //               <div className="relative">
    //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
    //                   <HiLockClosed className="w-5 h-5" />
    //                 </div>
    //                 <input
    //                   id="password"
    //                   name="password"
    //                   type={showPassword ? "text" : "password"}
    //                   value={formData.password}
    //                   onChange={handleChange}
    //                   className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
    //                   placeholder="Create a password"
    //                   disabled={loading}
    //                 />
    //                 <button
    //                   type="button"
    //                   onClick={() => setShowPassword((s) => !s)}
    //                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
    //                   aria-label={showPassword ? "Hide password" : "Show password"}
    //                 >
    //                   {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
    //                 </button>
    //               </div>
    //               <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
    //             </div>

    //             <div>
    //               <label htmlFor="confirmPassword" className="sr-only">
    //                 Confirm Password
    //               </label>
    //               <input
    //                 id="confirmPassword"
    //                 name="confirmPassword"
    //                 type={showPassword ? "text" : "password"}
    //                 value={formData.confirmPassword}
    //                 onChange={handleChange}
    //                 className="block w-full px-3 py-2 border border-gray-200 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
    //                 placeholder="Confirm password"
    //                 disabled={loading}
    //               />
    //             </div>

    //             <button
    //               type="submit"
    //               disabled={loading}
    //               className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60"
    //             >
    //               {loading ? "Creating account..." : "Create account"}
    //             </button>
    //           </form>

    //           <div className="mt-6">
    //             <div className="relative">
    //               <div className="absolute inset-0 flex items-center">
    //                 <div className="w-full border-t border-gray-200" />
    //               </div>
    //               <div className="relative flex justify-center text-sm">
    //                 <span className="px-2 bg-white text-gray-500">Or sign up with</span>
    //               </div>
    //             </div>

    //             <div className="mt-4 grid grid-cols-2 gap-3">
    //               <button
    //                 onClick={() => alert("Continuing with Google...")}
    //                 className="inline-flex items-center justify-center gap-2 py-2 px-3 border rounded-lg bg-white hover:bg-gray-50 shadow-sm"
    //               >
    //                 <HiOutlineGlobeAlt className="w-5 h-5 text-gray-700" />
    //                 <span className="text-sm text-gray-700">Google</span>
    //               </button>
    //               <button
    //                 onClick={() => alert("Setting up your Github...")}
    //                 className="inline-flex items-center justify-center gap-2 py-2 px-3 border rounded-lg bg-white hover:bg-gray-50 shadow-sm"
    //               >
    //                 <HiOutlineGlobeAlt className="w-5 h-5 text-gray-700" />
    //                 <span className="text-sm text-gray-700">GitHub</span>
    //               </button>
    //             </div>
    //           </div>
    //         </>
    //       )}
    //     </div>

    //     <p className="text-center text-xs text-gray-500">
    //       By creating an account you agree to our{" "}
    //       <Link to="/terms" className="underline hover:text-gray-700">
    //         Terms
    //       </Link>{" "}
    //       and{" "}
    //       <Link to="/privacy" className="underline hover:text-gray-700">
    //         Privacy Policy
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    <>
    <Header/>
    <div className="bg-[[#eeeeed] w-full h-full flex justify-center mt-24 ">
      <div className="w-[700px] shadow-md bg-[#eeeeed] p-3  flex flex-col gap-2.5 h-[600px] rounded-md mb-16">
        <h1 className="font-serif text-3xl">Get Started with <span className="text-2xl text-[#16161344]" >Ibonnis</span> {'</>'} </h1>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
           <label htmlFor="username" className=" text-2xl font-sans ml-2.5 tracking-[-1px] text-gray-800">
                 Username
                 </label>
                     <input
                      id="username"
                      name="username"
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      className=" border-2 border-gray-400 rounded-md focus:ring-amber-400 "
                      placeholder="Username"
                      disabled={loading}
                   />
        </div>
        <div className="flex flex-col">
                 <label htmlFor="email" className="text-2xl font-sans ml-2.5 tracking-[-1px] text-gray-800">
                 Email address
               </label>
                      <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-2 border-gray-400 rounded-md focus:ring-amber-400 "
                      placeholder="you@example.com"
                      disabled={loading}
                    />
        </div>
        <div className="flex justify-between ml-2 mr-2">
        <div className="flex flex-col">
   <label htmlFor="password" className="">
                 Password
              </label>
                       <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className="border-2 border-gray-400 rounded-md focus:border-amber-300"
                      placeholder="Create a password"
                      disabled={loading}
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
        <div className="flex flex-col">
           <label htmlFor="confirmPassword" className="">
              Confirm Password
             </label>
               <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border-2 border-gray-400 rounded-md focus:ring-amber-400 "
                    placeholder="Confirm password"
                    disabled={loading}
                  />
        </div>
        </div>
        <div>
          <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-linear-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-lg shadow hover:from-gray-700 hover:to-amber-700 disabled:opacity-60"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
        </div>e
        <div>
          <p className="text-center">Or Continue with...</p>
          {/* <button className="text-center bg-amber-400 p-2" onClick={Login}>Google</button> */}
          <Login/>
        </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;