
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <div className='w-full h-16 bg-blue-600 flex items-center px-4 flex justify-between'>
//         <div className='text-2xl p-1 font-mono'>
//             <h1>
//                 <Link to="/">NICETEA</Link>
//             </h1>
//         </div>
//         <div>
//             <input type="text"placeholder='Enter here' />
//         </div>
//         <div>
//             <Link to="/">Home</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/support">Support</Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar
///////////////////////////////////////

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

const Navbar = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsSignedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsSignedIn(false);
    navigate("/login");
  };

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `hover:text-green-700 transition-colors ${
      isActive ? "border-b-4 border-red-500 pb-1" : ""
    }`;

  return (
    <nav className="w-full bg-gray-100 h-20 fixed top-0 left-0 right-0 z-50 shadow-md flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-3xl font-serif tracking-tight text-green-900">
        <NavLink to="/" className="hover:text-green-700 transition-colors">
          NICETEA
        </NavLink>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-xl font-light">
        <NavLink to="/jobs" className={linkClasses}>Jobs</NavLink>
        <NavLink to="/courses" className={linkClasses}>Courses</NavLink>
        <NavLink to="/community" className={linkClasses}>Community</NavLink>
        {isSignedIn ? (
          <>
            <NavLink to="/profile" className={linkClasses}>Profile</NavLink>
            <button
              onClick={handleLogout}
              className="hover:text-red-600 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className={linkClasses}>Sign In</NavLink>
        )}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-green-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center gap-6 py-6 text-lg font-light md:hidden">
          <NavLink to="/jobs" className={linkClasses} onClick={() => setMenuOpen(false)}>Jobs</NavLink>
          <NavLink to="/courses" className={linkClasses} onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/community" className={linkClasses} onClick={() => setMenuOpen(false)}>Community</NavLink>
          {isSignedIn ? (
            <>
              <NavLink to="/profile" className={linkClasses} onClick={() => setMenuOpen(false)}>Profile</NavLink>
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                className="hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={linkClasses} onClick={() => setMenuOpen(false)}>Sign In</NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

