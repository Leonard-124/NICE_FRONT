
import Contact from './components/Contact'
import Support from './components/Support'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  )
}

export default App
