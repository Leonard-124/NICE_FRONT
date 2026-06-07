

// import React from 'react'
import Header from  "../Home/Header"
import Footer from "../Home/Footer"


const Developer = () => {
  return (

    <>
        <Header/>
        <div>
        <div className='min-h-screen text-[#4b4b4a] flex  justify-center mt-60 text-xl font-serif'>
            <div className='flex flex-col'>
            <p>Developer options will launch soon </p>
            <p><a href="/#newsletter_below" className='hover:underline' id="newsletter">Subscribe to our newsletter</a></p>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Developer