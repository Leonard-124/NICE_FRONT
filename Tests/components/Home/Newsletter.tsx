import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-[250px] w-full flex-col items-center'>
        <p>Subscribe to our daily newspaper</p>
        <form className='flex justify between w-full'>
            <input type="text" className='h-4 w-full'/>
            <button className='bg-[#9e2b2b] hover:bg-[#ebb8b8] h-4'>Subscribe</button>
        </form>
        <div className='flex items-center'>
            <p className='bg-[#7760776c] p-1 w-15'>Get Started</p>
        </div>
    </div>
  )
}

export default Newsletter;