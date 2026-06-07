

import React from 'react'
import Header from  "../Home/Header"
import Footer from "../Home/Footer"


const Applications = () => {
  return (

    <>
        <Header/>
        <div>
        <div className='min-h-screen text-[#4b4b4a] flex  justify-center mt-60 text-xl font-serif'>
            <div className='flex flex-col'>
            <p>Applications are coming soon! </p>
            <p><a href="/#newsletter" className='hover:underline'>Subscribe to our newsletter</a></p>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Applications