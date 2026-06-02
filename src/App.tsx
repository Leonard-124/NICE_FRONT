import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from "react";


//Lazy_load pages




const Jobs = lazy(() => import("./components/Jobs"))
const Apply = lazy(() => import("./components/Jobs/Apply"))
const Courses = lazy(() => import("./components/Courses"))
const  Community = lazy(() => import("./components/Community"))
// import Home from './components/Home'   //Production
const Home = lazy(() => import("../Tests/components/Home/Home")) //Test
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"))
const Profile = lazy(() => import("./pages/Profile"));
const Groups = lazy(() => import("./components/Jobs/Groups"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))
import { ResetPassword } from './pages/ForgotPassword'
const VerifyEmail = lazy(() => import("./pages/verifyEmail"));
//import Supabasetest from './components/Jobs/supabase/Supabasetest'
//import Supa from './components/Jobs/supabase/Supa'
//import CourseList from './components/Courses/CourseList'
const About = lazy(() => import("./components/Home/About"));
const Blogpage = lazy(() => import("./components/Home/Blogs/Blogpage"));
const Card1 = lazy(() => import("./components/Home/Blogs/Card1"));
const Card2 = lazy(() => import("./components/Home/Blogs/Card2"))
const Card3 = lazy(() => import("./components/Home/Blogs/Card3"));
const Card4 = lazy(() => import("./components/Home/Blogs/Card4"));
const Card5 = lazy(() => import("./components/Home/Blogs/Card5"));
const Header = lazy(() => import("./Header"));
import NotFound from './components/NotFound';
// import { sdk } from '@farcaster/miniapp-sdk/dist/sdk'
// import { useEffect } from 'react'

//Pageloader
function PageLoader() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#fafaf7]'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-4 border-[#333532e0]' />
    </div>
  );
}


const App = () => {
  //   useEffect(() => {
  //   sdk.actions.ready(); // Hides the splash screen
  // }, []);

  return (
    <div>
      <Header />
      <Suspense fallback={<PageLoader />}>
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
        <Route path="/blogs" element={<Blogpage />} />
        <Route path="/groups" element={<Groups />} />
        {/* <Route path="/supa" element={<Supa />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/verify-email' element={<VerifyEmail />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
