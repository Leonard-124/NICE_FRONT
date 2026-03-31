

// import React from 'react'
import unixart_av from "../assets/images/unixart_av.png"
import almo from "../assets/images/almo.png"
import { useState} from "react"
import { XIcon } from "lucide-react"
// import space_explore from "../assets/images/space_explore.png"



const data = [
    {
    id: 1,
    image: unixart_av,
    title: "UNIXART",
    link: "https://www.unixart.art",
    description: "Unixart a plartform where we sell unique collections in art, woodworks, paintings, sculptures and other traditional high value collections. It brings together various cultures and there traditions in one place. Buyers are able to feel the taste of there own culture uniquely and explore other diversities avaialble at Unixart."
    },
    {
        id: 2,
        image: almo,
        title: "ALMOFARMPRODUCESUPPLIERS",
        link: "https://www.almofarmproducesuppliers.com",
        description: "This is a plartform that focuses on the sales of various types of cereal produce in bulks majorly around Nairobi and Kiambu counties.",

    }
]



const Overhead = () => {
    const [open, setOpen] = useState(false)


    const handleClick = (e: any) => {
        e.preventDefault()
        setOpen(true)
    }


    // useEffect(()=> {
    //     handleClick()
    // },[])

  return (
    <div className="bg-[#f6fff4] w-full h-[600px] p-2">
        <h1 className="m-1 font-bold text-[18px] text-center">Plartforms running under IBONNIS</h1>
        {data.length > 0 ? (
            <div className="flex justify-evenly gap-3">
                {data.map((item, id) => (
                    <div key={id} className="w-[600px] h-[450px] rounded-[7px]">
                        <img src={item.image} alt="image 1" className="w-full h-full object-cover hover:p-3 rounded-md"/>
                        <div className="flex justify-between">
                            <p className="font-bold text-[#97fa83] tracking-[-1px] m-2">{item.title}</p>
                            <a href={item.link} className="font-ligh cursor-pointer text-red-600">Visit</a>
                            {open && <p className="m-3 p-1 text-[14px] text-[#3d3535]">{item.description}</p>}
                            {open && <button onClick={() => setOpen(false)}><XIcon height={15} width={25}/></button>}
                            <button onClick={(item) => handleClick(item)} disabled={false} className="text-[10px] font-bold bg-[#f3a2a2] p-1 rounded-xs hover:cursor-pointer hover:bg-[#b4f8a3] m-1 h-5">More</button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div>
                <p>No data to display yet.</p>
            </div>
        )}

    </div>
  )
}

export default Overhead