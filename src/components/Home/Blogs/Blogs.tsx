import { Images } from "../../../assets/images/images.ts"
import React from "react";

interface Images {
    id: number;
    image: string;
    description: string;
    author: string;
    link: string
}


const Blogs: React.FC = () => {
    
  return (
    <div className=" h-[600px] w-full bg-[#f5f5f3]">
      <div className="flex justify-center">
    {Images.map((item) => (
        <a href={item.link} key={item.id} className="h-[500px] w-[400px] m-4 border-[0.5px] border-gray-200 rounded-md shadow-md">
            <img src={item.image} alt="" className="h-[300px] w-full object-cover"/>
            <div className="text-xl font-light ">
                <p className="tracking-[-1.5px] text-gray-400 text-[16px]">{item.author}</p>
            <p className="text-black font-bold tracking-[-0.5px] mt-2 ">{item.description}</p>
            </div>
        </a>
    ))}
      </div>
    </div>
  )
}

export default Blogs;
/////////////////////////////////////////////////

<a href=""></a>