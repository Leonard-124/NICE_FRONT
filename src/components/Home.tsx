
//import Blogs from "./Home/Blogs/Blogs"
import Dream from "./Home/Dream"
import Experts from "./Home/Experts"
import Footer from "./Home/Footer"
import Slider from "./Home/Slider"
import Navbar from "./Navbar"


const Home = () => {
  return (
    <>
        <Navbar />
        <div className="mt-20 flex justify-around text-xl sm:text-3xl tracking-[-1px] font-light text-[#181f36] ">
          <p>Discover</p>
          <p>Build</p>
          <p>Innovate</p>
          <p>Apply</p>
        </div>
        <Slider />
        {/* <Blogs /> */}
        <Experts />
        <Dream />
        <Footer />
    </>
  )
}

export default Home;
