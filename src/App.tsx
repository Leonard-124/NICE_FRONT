import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from "react";


//Lazy_load pages




import Jobs from './components/Jobs'
import Apply from './components/Jobs/Apply'
import Courses from './components/Courses'
import Community from './components/Community'
// import Home from './components/Home'   //Production
const Home = lazy(() => import("../Tests/components/Home/Home")) //Test
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Groups from './components/Jobs/Groups'
import ForgotPassword from './pages/ForgotPassword'
import { ResetPassword } from './pages/ForgotPassword'
import VerifyEmail from './pages/verifyEmail'
//import Supabasetest from './components/Jobs/supabase/Supabasetest'
//import Supa from './components/Jobs/supabase/Supa'
//import CourseList from './components/Courses/CourseList'
import About from './components/Home/About'
import Blogpage from './components/Home/Blogs/Blogpage'
import Card1 from './components/Home/Blogs/Card1'
import Card2 from './components/Home/Blogs/Card2'
import Card3 from './components/Home/Blogs/Card3'
import Card4 from './components/Home/Blogs/Card4'
import Card5 from './components/Home/Blogs/Card5'
import Header from './Header'
import NotFound from './components/NotFound'
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
