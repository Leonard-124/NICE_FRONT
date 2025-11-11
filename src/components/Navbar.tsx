
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='w-full h-16 bg-blue-600 flex items-center px-4 flex justify-between'>
        <div className='text-2xl p-1 font-mono'>
            <h1>
                <Link to="/">NICETEA</Link>
            </h1>
        </div>
        <div>
            <input type="text"placeholder='Enter here' />
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar

