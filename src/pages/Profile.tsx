// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";

// type User = {
//   id?: string;
//   username: string;
//   email: string;
//   role?: string;
// };

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<User | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("accessToken");
//       if (!token) {
//         setError("No access token found. Please log in.");
//         return;
//       }

//       try {
//         const res = await fetch(`${import.meta.env.VITE_API_UR}/api/profile/me`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) {
//           const errData = await res.json().catch(() => null);
//           throw new Error(errData?.error || `HTTP error ${res.status}`);
//         }

//         const result = await res.json();
//         setUser(result.user);
//       } catch (err: any) {
//         setError(err.message);
//         console.error("Profile fetch error:", err);
//         navigate('/login')
//       }
//     };

//     fetchUser();
//   }, []);

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!user) return <div className="text-gray-500">Loading...</div>;

//   return (
//     <>
//     <Navbar />
//         <div className="w-80 bg-white shadow-md rounded-lg p-6 border border-gray-200 mt-20">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
//       <div className="space-y-2 text-gray-700">
//         <p>
//           <span className="font-medium">Welcome:</span> {user.username}
//         </p>
//         <p>
//           <span className="font-medium">Email:</span> {user.email}
//         </p>
//         {user.role && (
//           <p>
//             <span className="font-medium">Role:</span> {user.role}
//           </p>
//         )}
//       </div>
//     </div>
//     </>

//   );
// };

// export default Profile;

//////////////////////////////////////

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { HiUser, HiMail, HiShieldCheck, HiArrowRight, HiLogout } from "react-icons/hi";

type User = {
  id?: string;
  username: string;
  email: string;
  role?: string;
};

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("No access token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_UR}/api/profile/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => null);
          throw new Error(errData?.error || `HTTP error ${res.status}`);
        }

        const result = await res.json();
        setUser(result.user);
      } catch (err: any) {
        setError(err.message);
        console.error("Profile fetch error:", err);
        setTimeout(() => navigate("/login"), 2000);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      {/* Loading State */}
      {loading && (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 pt-24 sm:pt-28 lg:pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin mb-4">
              <svg
                className="w-12 h-12 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium">Loading your profile...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 pt-24 sm:pt-28 lg:pt-32 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚠️</span>
              <h3 className="text-xl font-bold text-gray-900">Error</h3>
            </div>
            <p className="text-gray-700 mb-6">{error}</p>
            <p className="text-sm text-gray-600 mb-6">Redirecting to login in a moment...</p>
            <button
              onClick={() => navigate("/login")}
              className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}

      {/* Profile Content */}
      {!loading && !error && user && (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Welcome Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Welcome Back, <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">{user.username}!</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Here's your account information
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              
              {/* Header Background */}
              <div className="h-32 sm:h-40 bg-linear-to-r from-blue-600 to-indigo-600"></div>

              {/* Profile Content */}
              <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
                
                {/* Avatar & Name */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 -mt-16 sm:-mt-20 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 border-4 border-white shadow-lg flex items-center justify-center text-4xl sm:text-5xl font-bold text-white">
                    {user.username.slice(0,2).toUpperCase()}
                    {/* {user.username.charAt(0).toUpperCase()} */}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      {user.username}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      Account Member
                    </p>
                  </div>
                </div>

                {/* Profile Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
                  
                  {/* Email Card */}
                  <div className="p-6 sm:p-7 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                        <HiMail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <label className="text-sm sm:text-base font-bold text-gray-700">
                        Email Address
                      </label>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
                      {user.email}
                    </p>
                  </div>

                  {/* Role Card */}
                  <div className="p-6 sm:p-7 bg-linear-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:border-green-300 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-600 flex items-center justify-center">
                        <HiShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <label className="text-sm sm:text-base font-bold text-gray-700">
                        Account Role:
                      </label>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-gray-900 capitalize">
                      {user.role ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm sm:text-base font-medium">
                          <span>✓</span>
                          {user.role}
                        </span>
                      ) : (
                        <span className="text-gray-500">Not assigned</span>
                      )}
                    </p>
                  </div>

                  {/* User ID Card */}
                  <div className="p-6 sm:p-7 bg-linear-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:border-purple-300 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-600 flex items-center justify-center">
                        <HiUser className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <label className="text-sm sm:text-base font-bold text-gray-700">
                        User ID
                      </label>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-gray-700 break-all">
                      {user.id || "N/A"}
                    </p>
                  </div>

                  {/* Account Status Card */}
                  <div className="p-6 sm:p-7 bg-linear-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-600 flex items-center justify-center">
                        <span className="text-lg sm:text-xl">✓</span>
                      </div>
                      <label className="text-sm sm:text-base font-bold text-gray-700">
                        Account Status
                      </label>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm sm:text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        Active
                      </span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 sm:pt-10 border-t border-gray-200">
                  <button
                    onClick={() => navigate("/")}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
                  >
                    <HiArrowRight className="w-5 h-5" />
                    Back to Home
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-linear-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <HiLogout className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-blue-50 border border-blue-200 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <span>💡</span>
                Account Information
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You're all set! Your account is active and ready to use.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Explore our jobs, courses, and community features.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>Contact support if you need any assistance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;