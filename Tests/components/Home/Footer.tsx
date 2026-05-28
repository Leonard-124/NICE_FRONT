

import React from 'react'

const Footer = () => {
  return (
    <div className='h-[400px] bg-[#1b1b1b] flex justify-center'>
        <div className='flex justify-between items-center gap-14'>
            <div className=' flex-col items-center text-white'>
                <p>Privacy policy</p>
                <p>Research</p>
                <p>Security Systems</p>
                <p>Health Systems</p>
            </div>
            <div className='flex-col items-center text-white'>
                <p>About</p>
                <p>SmartEnvironment</p>
                <p>Food Systems</p>
                <p>SuperHumans</p>
            </div>
            <div className='flex-col items-center text-white'>
                <p>Support</p>
                <p>Blogs</p>
                <p>Education Systems</p>
                <p></p>
            </div>
            <div className='flex-col items-center text-white'>
                <p>Jobs</p>
                <p>Host</p>
                <p>Hardwares</p>
                <p>Blogs</p>
            </div>
        </div>
    </div>
  )
}

export default Footer