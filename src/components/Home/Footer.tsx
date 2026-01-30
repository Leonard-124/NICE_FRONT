// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 mt-20">
//       {/* Links section */}
//       <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">
//         {/* Column 1 */}
//         <div className="flex flex-col gap-4 text-lg sm:text-xl font-light">
//           <Link to="/courses" className="hover:text-red-500 transition-colors">Courses</Link>
//           <Link to="/jobs" className="hover:text-red-500 transition-colors">Jobs</Link>
//           <Link to="/community" className="hover:text-red-500 transition-colors">Community</Link>
//           <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col gap-4 text-lg sm:text-xl font-light">
//           <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
//           <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
//           <Link to="/sign-up" className="hover:text-red-500 transition-colors">Sign Up</Link>
//           <Link to="/sign-in" className="hover:text-red-500 transition-colors">Sign In</Link>
//         </div>

//         {/* Column 3 (optional extra info) */}
//         <div className="flex flex-col gap-4 text-lg sm:text-xl font-light">
//           {/* <p className="text-gray-700">Follow Us</p> */}
//           <Link to="/community" className="hover:text-red-500 transition-colors">Follow Us</Link>
//           <Link to="/contact" className="hover:text-red-500 transition-colors">Support</Link>
//           <Link to="/blogs" className="hover:text-red-500 transition-colors">Blogs</Link>
//            {/*<Link to="/supa" className="hover:text-red-500 transition-colors">Supa</Link> */}
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-300" />

//       {/* Bottom copyright */}
//       <div className="text-center py-6 text-sm sm:text-base md:text-lg text-gray-600">
//         <p>© IBONNI Systems 2026. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
////////////////////////////////////////////////////////////////////////

import { Link } from "react-router-dom";
import { HiMail, HiGlobeAlt, HiChevronRight } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand / Intro */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">IBONNIS Systems</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Building practical software, devices and services to empower creators and professionals.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline"
                aria-label="Contact"
              >
                <HiMail className="w-5 h-5" />
                Contact
              </a>
              <a
                href="/community"
                className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline"
                aria-label="Community"
              >
                <HiGlobeAlt className="w-5 h-5" />
                Community
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Products & Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <HiChevronRight className="w-4 h-4" /> Courses
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <HiChevronRight className="w-4 h-4" /> Jobs
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <HiChevronRight className="w-4 h-4" /> Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <HiChevronRight className="w-4 h-4" /> About
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <HiChevronRight className="w-4 h-4" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <HiChevronRight className="w-4 h-4" /> Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Auth / CTA */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sign-up" className="text-gray-700 hover:text-gray-900">
                  Create account
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-700 hover:text-gray-900">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-700 hover:text-gray-900">
                  Join Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© IBONNIS Systems 2026. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
