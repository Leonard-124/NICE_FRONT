
import Jobs from './components/Jobs'
import Apply from './components/Jobs/Apply'
import Courses from './components/Courses'
import Community from './components/Community'
import Home from './components/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
