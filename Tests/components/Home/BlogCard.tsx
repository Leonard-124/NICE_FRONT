import native_ai from "../../../src/assets/images/image2/native_ai.jpg"
import rocket from "../../../src/assets/images/rocket.png"
import systems from "../../../src/assets/images/image2/systems.jpg"
import future from "../../../src/assets/images/image2/future.jpg"



const items = [
    {
        image: native_ai,
        title: 'Advanced GPU accelerator',
        description: "GPU acceleration is very key when it comes to ai modeling and training...",
        author: "From: Ibonnis",
    },
    {
        image: rocket,
        title: "Connecting with core i5",
        description: "The core i5 powering latest intelligent systems from Ibonnis is designed with an art of...",
        author: "From: Ibonnis",
    },
    {
        image: systems,
        title: "The Age native compute.",
        description: "Age native compute allows you to manage all your web-worker models and tech care of your security...",
        author: "From: Ibonnis"
    },
    {
        image: future,
        title: "The accelera",
        description: "Created and designed to be user friendly and help in cognitive acceleration...",
        author: "From Ibonnis"
    }
]

import React from 'react'

const BlogCard = () => {
  return (
    <div className="h-[500px] rounded-3xl bg-[#ffffffb6] flex justify-center items-center">
        <div className="flex justify-center">
            {items.map((item, index) => (
                <div key={index} className="w- full h-[300px]  m-2 gap-2 pb-20 bg-[#f1f1ec]">
                    <img src={item.image} alt=""  className="w-full h-full object-cover rounded-t-2xl"/>
                    <p className="flex justify-between">
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                    </p>
                    <p>{item.description}</p>
                    <p>{item.author}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BlogCard;