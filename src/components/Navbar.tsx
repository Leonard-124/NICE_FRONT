

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { HiNewspaper, HiBriefcase, HiAcademicCap, HiUsers, HiUser, HiLogout, HiLogin } from "react-icons/hi";
import logo from "../assets/images/ibonnis3.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsSignedIn(!!token);

    // Add scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsSignedIn(false);
    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/blogs", label: "Blogs", icon: HiNewspaper },
    { to: "/jobs", label: "Jobs", icon: HiBriefcase },
    { to: "/courses", label: "Courses", icon: HiAcademicCap },
    { to: "/community", label: "Community", icon: HiUsers },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b-2 border-gray-100"
          : "bg-linear-to-r from-blue-50 to-indigo-50 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity group"
        >
          <div className="relative">
            <img
              src={logo}
              alt="IBONNIS Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-blue-600 group-hover:border-red-600 transition-colors shadow-md"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">Ibonnis</span>
            <span className="text-xs text-gray-500 font-light">Building the Future</span>
          </div>
          <span className="sm:hidden text-xl font-bold text-gray-900">Ibonnis</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`
                }
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div className="h-8 w-px bg-gray-300 mx-2 lg:mx-4"></div>

          {isSignedIn ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-200 ${
                    isActive
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-green-100 hover:text-green-600"
                  }`
                }
              >
                <HiUser className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Profile</span>
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base text-red-600 hover:bg-red-100 transition-all duration-200"
              >
                <HiLogout className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm lg:text-base transition-all duration-200 ${
                  isActive
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-linear-to-r from-red-500 to-red-600 text-white hover:shadow-lg hover:scale-105"
                }`
              }
            >
              <HiLogin className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Sign In</span>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {menuOpen ? (
            <X size={28} className="text-gray-800" />
          ) : (
            <Menu size={28} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-2">
            
            {/* Mobile Nav Items */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}

            <div className="h-px bg-gray-200 my-3 sm:my-4"></div>

            {/* Mobile Auth Section */}
            {isSignedIn ? (
              <>
                <NavLink
                  to="/profile"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 ${
                      isActive
                        ? "bg-green-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-green-100 hover:text-green-600"
                    }`
                  }
                >
                  <HiUser className="w-5 h-5" />
                  <span>Profile</span>
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base text-red-600 hover:bg-red-100 transition-all duration-200 text-left"
                >
                  <HiLogout className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 ${
                    isActive
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-linear-to-r from-red-500 to-red-600 text-white hover:shadow-lg"
                  }`
                }
              >
                <HiLogin className="w-5 h-5" />
                <span>Sign In</span>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
