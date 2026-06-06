// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// // import {
// //   HiUser,
// //   HiAtSymbol,
// //   HiLockClosed,
// //   HiEye,
// //   HiEyeOff,
// //   HiCheckCircle,
// //   HiOutlineGlobeAlt,
// // } from "react-icons/hi";

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
//   const [showPassword, setShowPassword] = useState(false);

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
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);
//     setError("");

//     try {
//       await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
//         {
//           username: formData.username,
//           email: formData.email,
//           password: formData.password,
//         } as RegisterPayload
//       );

//       setSuccess(true);
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);
//     } catch (err: unknown) {
//       let message: string = "Registration failed. Please try again.";
//       if (axios.isAxiosError(err)) {
//         const data = err.response?.data as AxiosErrorResponse | undefined;
//         message = data?.error || message;
//       } else if (err instanceof Error) {
//         message = err.message;
//       }
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center py=8 px-4 sm:px-6 lg:px-8 w-full h-full ">
//         <form onSubmit={handleSubmit} className="bg-[#e8ebd5ef] w-[650px]">
//             <div className="flex justify-between gap-1">
//             <div>
//         <label htmlFor="username" className="">username:</label>
//             <div className="">
//                 <input type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="block w-80 pl-10 pr-3 border border-gray-200 rounded-lg placeholder-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
//                  />
//             </div>
//             </div>
//             <div className="">
//                 <label htmlFor="email" >Email address:</label>
//                 <input type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="block w-full pl-10 pr-3 border border-gray-200 rounded-lg placeholder-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
//                  />
//             </div>
//             </div>
//             <div className="flex justify-between">
//             <div>
//                 <label htmlFor="password">Password:</label>
//                 <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="block w-full pl-10 pr-3 border border-gray-200 rounded-lg placeholder-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
//                  />
//             </div>
//             <div>
//                 <label htmlFor="password">Confirm Password:</label>
//                 <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="block w-full pl-10 pr-3 border border-gray-200 rounded-lg placeholder-gray-200 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
//                  />
//             </div>
//             </div>
//         </form>
//     </div>
//   );
// };

// export default Signup;