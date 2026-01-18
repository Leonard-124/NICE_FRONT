
import Blogs from "./Home/Blogs/Blogs"
import Dream from "./Home/Dream"
import Experts from "./Home/Experts"
import Footer from "./Home/Footer"
import Slider from "./Home/Slider"
import Navbar from "./Navbar"


const Home = () => {
  return (
    <>
        <Navbar />
        <div className="mt-20 text-4xl tracking-[-4px] text-red-600 text-center padding:before-">
          IBONNI Systems  where technology meets demand.
        </div>
        <Slider />
        <Blogs />
        <Experts />
        <Dream />
        <Footer />
    </>
  )
}

export default Home;
