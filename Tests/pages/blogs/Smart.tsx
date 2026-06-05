


import { metadata } from "../blogs/meta_data"
import Header from '../../components/Home/Header'
import Footer from "../../components/Home/Footer"

const Smart = () => {
  return (
    <>
    <Header />
    <div className='bg-[#f7f6ee] w-full'>
      <div className="h-[550px] w-full realtive text-7xl object-fill scroll-auto font-serif text-[#0a0902] mb-1">
        <img src={metadata[3]?.image ?? " "} alt=""  className="w-full h-full object-cover"/>
        <p className="absolute top-80 right-0 left-96 ml-48">{metadata[2]?.name ?? ""}</p>
      </div>
      <div className="flex justify-center items-center bg-[#ddddce]">
        <div className=" bg-[#f8f8e0] w-[900px] p-2.5">
          <h1 className="text-4xl font-bold">Smart systems are systems that are meant to simplify
             basic tasks by allowing the user to focus on high end tasks</h1>
          <div className="flex-col items-center text-[18px] font-sans pt-6 ">
            <p> Smart systems will help simplify human tasks by atleast 30%. They are not
               meant to replace human labour, they are systems that simplify tasks.</p>
            <p>Smart systems will come us hardware devices that perform physical tasks and
               also as software that can be preinstalled on a mobile device or desktop. </p>
            <p className="text-[#696868] font-medium ">Categories of Smart Systems:</p>
            <div className=" pl-7">
              <li>House Appliances-- These include gadgets like: tempeature regulators, </li>
              <li>automatic light switches, smart watches  e.t.c</li>
              <li>Business Needs Appliances-- Include softwares like email assistants,</li>
              <li>business  analysis by trends and data.</li>
            </div>
            <h1 className="pt-2.5 text-[#3b3b3b] text-xl font-medium">How to use smart systems:</h1>
              <ul className=" flex-col gap-1.5 ">
                <li>1. Users will be required to follow the instructions on the usage of the hardware </li>
                <li>2. Users will be guided on their fist time of interracting with the system.</li>
              </ul>
              <div className="w-auto h-[500px] relative mb-5">
                <img src={`${metadata.find((_, index) => index === 2)?.image ?? ""}`} alt="" 
                className="w-full h-full object-cover rounded-tr-[200px] rounded-bl-[200px]"
                 />
                 <p className="absolute top-40 text-[#fbfce1] left-40">{metadata[2]?.name ?? ""}: <span className="text-[16px] text-[#f3ff49] tracking-[-1px]">Systems that improve prodductivity.</span></p>
              </div>
              <h1 className="pt-2.5 text-[#3b3b3b] text-xl font-medium">How smart systems help:</h1>
              <div className="pl-7">
                <li>Smart systems help in  bringing comfort.</li>
                <li>Smart systems help in task simplification.</li>
                <li>Smart systems help in terms of efficiency.</li>
              </div>
              <p className="text-center font-medium text-xl tracking-[-0.8px] text-gray-400">More documnetation of how to use smart systems will be released soon.   </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Smart;