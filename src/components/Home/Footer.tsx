import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      {/* Links section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 text-lg sm:text-xl font-light">
          <Link to="/courses" className="hover:text-red-500 transition-colors">Courses</Link>
          <Link to="/jobs" className="hover:text-red-500 transition-colors">Jobs</Link>
          <Link to="/community" className="hover:text-red-500 transition-colors">Community</Link>
          <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 text-lg sm:text-xl font-light">
          <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
          <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
          <Link to="/sign-up" className="hover:text-red-500 transition-colors">Sign Up</Link>
          <Link to="/sign-in" className="hover:text-red-500 transition-colors">Sign In</Link>
        </div>

        {/* Column 3 (optional extra info) */}
        <div className="flex flex-col gap-4 text-lg sm:text-xl font-light">
          <p className="text-gray-700">Follow Us</p>
          <Link to="/community" className="hover:text-red-500 transition-colors">Community Forum</Link>
          <Link to="/contact" className="hover:text-red-500 transition-colors">Support</Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom copyright */}
      <div className="text-center py-6 text-sm sm:text-base md:text-lg text-gray-600">
        <p>© NICETEA 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
