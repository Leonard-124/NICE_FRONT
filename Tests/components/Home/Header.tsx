
import React from 'react'


const Header = () => {
  return (
    <div>
        <div className='flex justify-between bg-[#fdfdfd] p-8 fixed top-0 z-50 right-0 left-0'>
            <div> 
                <h1 className='text-3xl font-bold text-shadow-black'>Ibonnis</h1>
            </div>
            <div className='flex justify-evenly gap-2.5 text-xl mr-6 font-serif'>
            <div>Developer Options</div>
            <div>Pricing</div>
            <div>Applications</div>
            <div>Blogs</div>
            <div >Get started</div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Header