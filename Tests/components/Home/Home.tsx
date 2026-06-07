
// import React from 'react'
import Introduction from "./Introduction"
import Engines from "./Engines"
import Agenda from "./Agenda"
import Header from "./Header"
import BlogCard from "./BlogCard"
import Newsletter from "./Newsletter"
import Footer from "./Footer"
import Feedback from "../../pages/Feedback"

const Home = () => {
  return (
    <div className="bg-[#fcfcf8]">
       <Header />
        <Agenda />
        <Introduction />
        <Engines />
        <BlogCard />
        <Newsletter />
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Home