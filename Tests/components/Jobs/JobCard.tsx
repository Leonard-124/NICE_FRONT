import Header from "../../components/Home/Header"
import Footer from '../../components/Home/Footer'
import { useState, useEffect, useCallback, useMemo, useRef } from "react"


const job_data = [
  {
    title:"Frontend Developer",
    id: 1,
    link: "/apply",
    description: "Frontend developer needed"
  },
  {
    title:"Frontend Developer",
    id: 2,
    link: "/apply",
    description: "Frontend developer needed"
  },
  {
    title:"Backend",
    id: 3,
    link: "/apply",
    description: "Frontend developer needed"
  }
]




const JobCard = () => {
  return (
    <>
    <Header/>
    <div className='min-h-screen'>
<div className="flex justify-between w-full h-full">
  <div className="fixed h-[700px] w-[300px] bg-[rgb(150,150,147)] shadow-md scroll-auto">
    <div className="flex flex-col gap-3.5 mt-2">
      <p className="hover:bg-[#424142]"><a href="#">Current Jobs</a></p>
      <p className="hover:bg-[#424142]"><a href="#">Contribute</a></p>
      <p className="hover:bg-[#424142]"><a href="#">Saved</a></p>
    </div>
  </div>
  <div className="w-full bg-[] mt-20">
    <div className="text-center">
      <h1>Current available roles at Ibonnis</h1>
      <div className="flex justify-between">
        {job_data.length === 0 ? ( <p>No jobs availabele at the moment?</p>) : ( job_data.map((item, id) => (
          <div key={id} className="flex justify-between bg-[#cfcdcd] w-[300px] h-[400px] p-1">
            <p>{item.title}</p>
            <p>{item.link}</p>
            <p>{item.description}</p>
          </div>
        ))) }
      </div>
    </div>
  </div>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default JobCard;