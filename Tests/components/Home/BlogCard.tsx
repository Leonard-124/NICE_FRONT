import native_ai from "../../../src/assets/images/image2/native_ai.jpg"
import rocket from "../../../src/assets/images/rocket.png"
import systems from "../../../src/assets/images/image2/systems.jpg"
import future from "../../../src/assets/images/image2/future.jpg"

import { Link } from "react-router-dom"

const items = [
    {
        image: native_ai,
        title: 'Secure System Intelligence',
        link: "/security_systems",
        description: "Most applications are not secure, data breaches occurs everyday and many devices like cellphones, laptops, televisions fall in the trap of being ",
        author: "Security",
    },
    {
        image: rocket,
        title: "Health System",
        link: "/health_system",
        description: "Health systems are deployed as gadgets that measure user blood pressure, metabolic activity, heart rate, hormonal balance, cognitive",
        author: "Health",
    },
    {
        image: systems,
        title: "Smart Systems",
        link: "/smart_systems",
        description: "Smart systems are systems that are meant to simplify basic tasks by allowing the user to focus on high end tasks. Smart systems will help",
        author: "SmartSys"
    },
    {
        image: future,
        title: "Agro-Systems",
        link: "/agro_systems",
        description: "Agro - systems are intelligent native systems that will be applied in agriculture to improve production and ensure global food security.",
        author: "Agriculture"
    }
]


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
                        <Link to={item.link} className="text-[#7b7c72] hover:text-[#d41010]">Continue...</Link>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BlogCard;