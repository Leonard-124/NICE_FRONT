import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"


const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    setIsSignedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsSignedIn(false)
    navigate("/login")
  }

  const closeMenu = () => setMenuOpen(false)

  // const navItems = [
  //   {to: "/blogs", label: "Blogs"},
  //   {to: "/pricing", label: "Pricing"},
  //   {to: "/developer-options", label: "Developer Options"},
  //   {to: "/applications", label: "Applications"},
  //   {to: "/signup", label: "Get Started"}
  // ]

  return (
    <div>
        <div className='flex justify-between bg-[#fcfcf0] p-8 fixed top-0 z-50 right-0 left-0'>
            <div> 
                <h1 className='text-4xl font-sans text-[#3d3f1e] tracking-[-2px]'>Ibonnis</h1>
            </div>
            <div className='flex justify-evenly gap-2.5 text-2xl mr-6 font-serif text-[#3d3838]'>
            <div className="hover:underline underline-offset-1"><a href="/developer">Developer</a></div>
            <div className="hover:underline"><a href="/pricing">Pricing</a></div>
            <div className="hover:underline"><a href="/applications">Applications</a></div>
            <div className="hover:underline"><a href="/blogs">Blogs</a></div>
            <div className="hover:underline"><a href="/signup">Get Started</a></div>
            </div>
        </div>
        {isSignedIn ? (
                <div className='flex justify-between bg-[#fcfcf0] p-8 fixed top-0 z-50 right-0 left-0'>
            <div> 
                <h1 className='text-4xl font-sans text-[#3d3f1e] tracking-[-2px]'>Ibonnis</h1>
            </div>
            <div className='flex justify-evenly gap-2.5 text-2xl mr-6 font-serif text-[#3d3838]'>
            <div className="hover:underline underline-offset-1"><a href="/developer">Developer</a></div>
            <div className="hover:underline"><a href="/pricing">Pricing</a></div>
            <div className="hover:underline"><a href="/applications">Applications</a></div>
            <div className="hover:underline"><a href="/blogs">Blogs</a></div>
            <div className="hover:underline"><a href="/signup">Dashboard</a></div>
            </div>
        </div>
        ) : (
                  <div className='flex justify-between bg-[#fcfcf0] p-8 fixed top-0 z-50 right-0 left-0'>
            <div> 
                <h1 className='text-4xl font-sans text-[#3d3f1e] tracking-[-2px]'>Ibonnis</h1>
            </div>
            <div className='flex justify-evenly gap-2.5 text-2xl mr-6 font-serif text-[#3d3838]'>
            <div className="hover:underline underline-offset-1"><a href="/developer">Developer</a></div>
            <div className="hover:underline"><a href="/pricing">Pricing</a></div>
            <div className="hover:underline"><a href="/applications">Applications</a></div>
            <div className="hover:underline"><a href="/blogs">Blogs</a></div>
            <div className="hover:underline"><a href="/signup">Get Started</a></div>
            </div>
        </div>
        )}
    </div>
  )
}

export default Header