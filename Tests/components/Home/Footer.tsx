

import React from 'react'

const Footer = () => {
  return (
    <div className='h-[400px] bg-[#1b1b1b] flex justify-center'>
        <div className='flex justify-between items-center gap-28'>
            <div className=' flex-col items-center text-[#dfdfcd] text-xl'>
                <p><a href="/privacy">Privacy Policy</a></p>
                <p><a href="/research">Research</a></p>
                <p><a href="/security">Security Sys.</a></p>
                <p><a href="/health">Health Sys.</a></p>
            </div>
            <div className='flex-col items-center text-[#dfdfcd] text-xl'>
                <p><a href="/about">About</a></p>
                <p><a href="/smartenv">Smart Sys.</a></p>
                <p><a href="/foodsys">Food secure</a></p>
                <p><a href="/research">ResearchLabs</a></p>
            </div>
            <div className='flex-col items-center text-[#dfdfcd] text-xl'>
                <p><a href="/support">Support</a></p>
                <p><a href="/blogs">Blogs</a></p>
                <p><a href="/education">Education Sys.</a></p>
                <p></p>
            </div>
            <div className='flex-col items-center text-[#dfdfcd] text-xl'>
                <p><a href="/jobs">Jobs</a></p>
                <p><a href="/host">Host</a></p>
                <p><a href="/hardwares">Hardwares</a></p>
                <p><a href="/terms">Terms & Conditions</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer