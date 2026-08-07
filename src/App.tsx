// import { Routes, Route } from 'react-router-dom'
// import { Suspense, lazy } from "react";


// //Lazy_load pages


// const Security = lazy(() => import("../Tests/pages/blogs/Security"))
// const Health = lazy(() => import("../Tests/pages/blogs/Health"))
// const Smart = lazy(() => import("../Tests/pages/blogs/Smart"))
// const Agro = lazy(() => import("../Tests/pages/blogs/Agro"))
// const Applications = lazy(() => import("../Tests/components/Developer/Applications"))
// const Developer  = lazy(() => import("../Tests/components/Developer/Developer"))
// const Models = lazy(() => import("../Tests/components/Developer/Models"))
// const Pricing = lazy(() => import("../Tests/components/Developer/Pricing"))
// const JobCard = lazy(() => import("../Tests/components/Jobs/JobCard"))

// const Jobs = lazy(() => import("./components/Jobs"))
// const Apply = lazy(() => import("./components/Jobs/Apply"))
// const Courses = lazy(() => import("./components/Courses"))
// const  Community = lazy(() => import("./components/Community"))
// // import Home from './components/Home'   //Production
// const Home = lazy(() => import("../Tests/components/Home/Home")) //Test
// const Signup = lazy(() => import("./pages/Signup")); // Prod
// const Login = lazy(() => import("./pages/Login"))
// const Profile = lazy(() => import("./pages/Profile"));
// const Groups = lazy(() => import("./components/Jobs/Groups"));
// const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))
// import { ResetPassword } from './pages/ForgotPassword'
// const VerifyEmail = lazy(() => import("./pages/verifyEmail"));
// //import Supabasetest from './components/Jobs/supabase/Supabasetest'
// //import Supa from './components/Jobs/supabase/Supa'
// //import CourseList from './components/Courses/CourseList'
// const About = lazy(() => import("./components/Home/About"));
// const Blogpage = lazy(() => import("./components/Home/Blogs/Blogpage"));
// const Card1 = lazy(() => import("./components/Home/Blogs/Card1"));
// const Card2 = lazy(() => import("./components/Home/Blogs/Card2"))
// const Card3 = lazy(() => import("./components/Home/Blogs/Card3"));
// const Card4 = lazy(() => import("./components/Home/Blogs/Card4"));
// const Card5 = lazy(() => import("./components/Home/Blogs/Card5"));
// const Header = lazy(() => import("./Header"));
// import NotFound from './components/NotFound';
// import { AuthProvider } from '../Tests/Auth/Authcontext';
// import ProtectedRoute from '../Tests/Auth/Protectedroute';
// // import { sdk } from '@farcaster/miniapp-sdk/dist/sdk'
// // import { useEffect } from 'react'

// //Pageloader
// function PageLoader() {
//   return (
//     <div className='min-h-screen flex items-center justify-center bg-[#f3f3f3]'>
//       <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-[#333532e0]' />
//     </div>
//   );
// }


// const App = () => {
//   //   useEffect(() => {
//   //   sdk.actions.ready(); // Hides the splash screen
//   // }, []);

//   return (
//     <div>
//       <Header />
//       <Suspense fallback={<PageLoader />}>
//             <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/apply" element={<Apply />} />
//         <Route path="/community" element={<Community />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/card1" element={<Card1 />} />
//         <Route path="/card2" element={<Card2 />} />
//         <Route path="/card3" element={<Card3 />} />
//         <Route path="/card4" element={<Card4 />} />
//         <Route path="/card5" element={<Card5 />} />

//         <Route path="/security_systems" element={<Security />} />
//         <Route path="/health_system" element={<Health />} />
//         <Route path="/agro_systems" element={<Agro />} />
//         <Route path="/smart_systems" element={<Smart />} />
//         <Route path="/applications" element={<Applications />} />
//         <Route path="/developer" element={<Developer />} />
//         <Route path="/models" element={<Models />} />
//         <Route path="/pricing" element={<Pricing />} />

//         <Route path="/job_category" element={<JobCard />} />

//         <Route path="/blogs" element={<Blogpage />} />
//         <Route path="/groups" element={<Groups />} />
//         {/* <Route path="/supa" element={<Supa />} /> */}
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path='/forgot-password' element={<ForgotPassword />}/>
//         <Route path='/reset-password' element={<ResetPassword />}/>
//         <Route path='/verify-email' element={<VerifyEmail />}/>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       </Suspense>
//     </div>
//   )
// }

// export default App
//////////////////////////////////////////////////////////////////////////////////////////

import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from "react";

// Lazy_load pages
const Security = lazy(() => import("../Tests/pages/blogs/Security"))
const Health = lazy(() => import("../Tests/pages/blogs/Health"))
const Smart = lazy(() => import("../Tests/pages/blogs/Smart"))
const Agro = lazy(() => import("../Tests/pages/blogs/Agro"))
const Applications = lazy(() => import("../Tests/components/Developer/Applications"))
const Developer = lazy(() => import("../Tests/components/Developer/Developer"))
const Models = lazy(() => import("../Tests/components/Developer/Models"))
const Pricing = lazy(() => import("../Tests/components/Developer/Pricing"))
const JobCard = lazy(() => import("../Tests/components/Jobs/JobCard"))

const Jobs = lazy(() => import("./components/Jobs"))
const Apply = lazy(() => import("./components/Jobs/Apply"))
const Courses = lazy(() => import("./components/Courses"))
const Community = lazy(() => import("./components/Community"))
const Home = lazy(() => import("../Tests/components/Home/Home"))
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"))
const Profile = lazy(() => import("./pages/Profile"));
const Groups = lazy(() => import("./components/Jobs/Groups"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))
import { ResetPassword } from './pages/ForgotPassword'
const VerifyEmail = lazy(() => import("./pages/verifyEmail"));
const About = lazy(() => import("./components/Home/About"));
const Blogpage = lazy(() => import("./components/Home/Blogs/Blogpage"));
const Card1 = lazy(() => import("./components/Home/Blogs/Card1"));
const Card2 = lazy(() => import("./components/Home/Blogs/Card2"))
const Card3 = lazy(() => import("./components/Home/Blogs/Card3"));
const Card4 = lazy(() => import("./components/Home/Blogs/Card4"));
const Card5 = lazy(() => import("./components/Home/Blogs/Card5"));
const Header = lazy(() => import("./Header"));
const ProtectedRoute = lazy(() => import("../Tests/Auth/Protectedroute")) //debug1
const Profile2 = lazy(() => import("../Tests/Auth/Profile")) //debug2
const Login2 = lazy(() => import("../Tests/Auth/Login"))
import { AuthProvider } from "../Tests/Auth/Authcontext" //debug 3
import NotFound from './components/NotFound';

function PageLoader() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f3f3f3]'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-[#333532e0]' />
    </div>
  );
}

// Detect subdomain once
const isJobsSubdomain = window.location.hostname === 'jobs.ibonnis.com';

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<PageLoader />}>
          <AuthProvider>
                    {isJobsSubdomain ? (
          // ===== jobs.ibonnis.com routes (jobs content mounted at root) =====
          <Routes>
            <Route path="/" element={<JobCard />} />
            <Route path="/apply" element={<Apply />} />
            {/* <Route path="/category" element={<JobCard />} /> */}
            <Route path="/groups" element={<Groups />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          // ===== ibonnis.com (main app) routes — unchanged =====
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/card1" element={<Card1 />} />
            <Route path="/card2" element={<Card2 />} />
            <Route path="/card3" element={<Card3 />} />
            <Route path="/card4" element={<Card4 />} />
            <Route path="/card5" element={<Card5 />} />

            <Route path="/security_systems" element={<Security />} />
            <Route path="/health_system" element={<Health />} />
            <Route path="/agro_systems" element={<Agro />} />
            <Route path="/smart_systems" element={<Smart />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/models" element={<Models />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/job_category" element={<JobCard />} />

            <Route path="/blogs" element={<Blogpage />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile2" element={<ProtectedRoute> 
              <Profile2/>
            </ProtectedRoute>} />
            <Route path='/login2' element={<Login2 />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/verify-email' element={<VerifyEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
          </AuthProvider> 
      </Suspense>
    </div>
  )
}

export default App