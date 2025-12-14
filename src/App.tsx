
import Jobs from './components/Jobs'
import Apply from './components/Jobs/Apply'
import Courses from './components/Courses'
import Community from './components/Community'
import Home from './components/Home'
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
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/community" element={<Community />} />
        <Route path="/groups" element={<Groups />} />
        {/* <Route path="/supa" element={<Supa />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/verify-email' element={<VerifyEmail />}/>
      </Routes>
    </div>
  )
}

export default App
