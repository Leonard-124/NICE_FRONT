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

  const navItems = [
    {to: "/blogs", label: "Blogs"},
    {to: "/pricing", label: "Pricing"},
    {to: "/developer-options", label: "Developer Options"},
    {to: "/applications", label: "Applications"},
    {to: "/signup", label: "Get Started"}
  ]

  return (
    <div>
        <div className='flex justify-between bg-[#fdfdfd] p-8 fixed top-0 z-50 right-0 left-0'>
            <div> 
                <h1 className='text-3xl font-bold text-shadow-black'>Ibonnis</h1>
            </div>
            <div className='flex justify-evenly gap-2.5 text-xl mr-6 font-serif'>
            <div className="hover:underline underline-offset-1">Developer Options</div>
            <div className="hover:underline">Pricing</div>
            <div className="hover:underline">Applications</div>
            <div className="hover:underline">Blogs</div>
            <div className="hover:underline">Get started</div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Header