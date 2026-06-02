import native_ai from "../../../src/assets/images/image2/native_ai.jpg"
import rocket from "../../../src/assets/images/rocket.png"
import systems from "../../../src/assets/images/image2/systems.jpg"
import future from "../../../src/assets/images/image2/future.jpg"

import { Link } from "react-router-dom"

const items = [
    {
        image: native_ai,
        title: 'Advanced GPU accelerator',
        description: "GPU acceleration is very key when it comes to ai modeling and training...",
        author: "Ibonnis",
    },
    {
        image: rocket,
        title: "Connecting with core i5",
        description: "The core i5 powering latest intelligent systems from Ibonnis is designed with an art of...",
        author: "Ibonnis",
    },
    {
        image: systems,
        title: "The Age native compute.",
        description: "Age native compute allows you to manage all your web-worker models and tech care of your security...",
        author: "Ibonnis"
    },
    {
        image: future,
        title: "The accelera",
        description: "Created and designed to be user friendly and help in cognitive acceleration...",
        author: "Ibonnis"
    }
]

import React from 'react'

const BlogCard = () => {
  return (
    <div className="h-[500px] rounded-3xl bg-[#fafafab6] flex justify-center items-center">
        <div className="flex justify-center">
            {items.map((item, index) => (
                <div key={index} className="w- full h-[400px]  m-2 gap-2 pb-20 bg-[#e9e5e5] rounded-t-2xl">
                    <div className="w-full h-[250px]">
                        <img src={item.image} alt=""  className="w-full h-full object-cover rounded-t-2xl"/>
                    </div>
                    <div className="flex justify-between">
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                    </div>
                    <div className="p-1">
                    <p className="text-xl font-light tracking-[-0.5px] bg-[#eeeee1]">{item.description.slice(0, 72)}...</p>
                    <div className="flex justify-between p-1">
                        <p className="text-[#91907c] overline bg-[#2c2b2bd0] ">{item.author}</p>
                        <Link to={`item/id`} className="text-[#7b7c72] hover:text-[#af2e2e]">Continue...</Link>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BlogCard;