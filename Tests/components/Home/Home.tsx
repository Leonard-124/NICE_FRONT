
// import React from 'react'
import Introduction from "./Introduction"
import Engines from "./Engines"
import Agenda from "./Agenda"
import Header from "./Header"
import BlogCard from "./BlogCard"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
       <Header />
        <Agenda />
        <Introduction />
        <Engines />
        <BlogCard />
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home