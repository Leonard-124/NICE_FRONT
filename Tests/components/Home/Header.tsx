// import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react"


// const Header = () => {
//   const navigate = useNavigate();
//   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
//   const [menuOpen, setMenuOpen] = useState<boolean>(false)

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken")
//     setIsSignedIn(!!token)
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     setIsSignedIn(false)
//     navigate("/login")
//   }

//   const closeMenu = () => setMenuOpen(false)

//   // const navItems = [
//   //   {to: "/blogs", label: "Blogs"},
//   //   {to: "/pricing", label: "Pricing"},
//   //   {to: "/developer-options", label: "Developer Options"},
//   //   {to: "/applications", label: "Applications"},
//   //   {to: "/signup", label: "Get Started"}
//   // ]

//   return (
//     <div>
//         <div className='flex justify-between bg-[#fcfcf0] p-8 fixed top-0 z-50 right-0 left-0'>
//             <div> 
//                 <h1 className='text-4xl font-sans text-[#3d3f1e] tracking-[-2px]'> <a href="/">Ibonnis</a></h1>
//             </div>
//             <div className='flex justify-evenly gap-2.5 text-2xl mr-6 font-serif text-[#3d3838]'>
//             <div className="hover:underline underline-offset-1"><a href="/developer">Developer</a></div>
//             <div className="hover:underline"><a href="/pricing">Pricing</a></div>
//             <div className="hover:underline"><a href="/applications">Applications</a></div>
//             <div className="hover:underline"><a href="/blogs">Blogs</a></div>
//             <div className="hover:underline"><a href="/signup">Get Started</a></div>
//             </div>
//         </div>
//         {isSignedIn ? (
//                 <div className='flex justify-between bg-[#fcfcf0] p-8 fixed top-0 z-50 right-0 left-0'>
//             <div> 
//                 <h1 className='text-4xl font-sans text-[#3d3f1e] tracking-[-2px]'>Ibonnis</h1>
//             </div>
//             <div className='flex justify-evenly gap-2.5 text-2xl mr-6 font-serif text-[#3d3838]'>
//             <div className="hover:underline underline-offset-1"><a href="/developer">Developer</a></div>
//             <div className="hover:underline"><a href="/pricing">Pricing</a></div>
//             <div className="hover:underline"><a href="/applications">Applications</a></div>
//             <div className="hover:underline"><a href="/blogs">Blogs</a></div>
//             <div className="hover:underline"><a href="/profile">Profile</a></div>
//             </div>
//         </div>
//         ) : (
//                   <div className='flex justify-between bg-[#fcfcf0] p-8 fixed top-0 z-50 right-0 left-0'>
//             <div> 
//                 <h1 className='text-4xl font-sans text-[#3d3f1e] tracking-[-2px]'>Ibonnis</h1>
//             </div>
//             <div className='flex justify-evenly gap-2.5 text-2xl mr-6 font-serif text-[#3d3838]'>
//             <div className="hover:underline underline-offset-1"><a href="/developer">Developer</a></div>
//             <div className="hover:underline"><a href="/pricing">Pricing</a></div>
//             <div className="hover:underline"><a href="/applications">Applications</a></div>
//             <div className="hover:underline"><a href="/blogs">Blogs</a></div>
//             <div className="hover:underline"><a href="/signin">Sign In</a></div>
//             </div>
//         </div>
//         )}
//     </div>
//   )
// }

// export default Header
////////////////////////////////////////////
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navItems = [
    { to: "/developer", label: "Developer" },
    { to: "/pricing", label: "Pricing" },
    { to: "/applications", label: "Applications" },
    { to: "/blogs", label: "Blogs" },
    isSignedIn
      ? { to: "/profile", label: "Profile" }
      : { to: "/signin", label: "Sign In" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafae9fa] p-4 md:p-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-sans text-[#3d3f1e] tracking-[-2px]">
          <NavLink to="/">Ibonnis</NavLink>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-lg lg:text-2xl font-serif text-[#3d3838]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="hover:underline underline-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {isSignedIn && (
            <button
              onClick={handleLogout}
              className="hover:underline text-red-600 ml-2"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-lg font-serif text-[#3d3838]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="hover:underline underline-offset-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {isSignedIn && (
            <button
              onClick={handleLogout}
              className="hover:underline text-red-600"
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
