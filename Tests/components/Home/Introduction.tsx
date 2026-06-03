import React, { useState, useEffect } from "react"
import Future from "../../../src/assets/images/image2/future.jpg"
import native_ai from "../../../src/assets/images/image2/native_ai.jpg"
import systems from "../../../src/assets/images/image2/systems.jpg"
import Business from "../../../src/assets/images/image2/business.jpg"

const view = [
  {
    image: Future,
    description: "Re-Imagining the future of Deep Tech through invention and innovation"
  },
  {
    image: native_ai,
    description: "Building the next generation of AI models and Super intelligence"
  },
  {
    image: systems,
    description: "A place where we build great Systems and infrastructure with over 10,000+ trusted connections"
  },
  {
    image: Business,
    description: (
      <div className="flex-col items-center mt-0 text-2xl font-bold text-[#ff071b44]">
        <p>Helping businesses grow globally with sophisticated Systems <br /> like autonomous applications and Native AI Systems</p>
        <p>Bridging the gap of creativity with intelligent systems</p>
      </div>
    )
  }
]

const Introduction = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % view.length) // cycle through items
    }, 4000) // change every 4 seconds

    return () => clearInterval(timer) // cleanup
  }, [])

  const currentItem = view[index]

  return (
    <div className="mt-1.5 p-1.5  bg-[#fcfcf0e1] w-full h-[500px]">
      <div className="flex justify-between h-full">
        <div className="flex items-center text-2xl  text-[#141a1a] tracking-[-2px] w-full ml-3">
          <p>{currentItem.description}</p>
        </div>
        <div className="flex justify-between w-full h-full pr-16">
          <img src={currentItem.image} alt="" className="w-full h-full object-cover object-center rounded-bl-[60px] rounded-tr-[70px]" />
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Introduction


