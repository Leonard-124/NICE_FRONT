


import { metadata } from "../blogs/meta_data"
import Header from '../../components/Home/Header'

const Security = () => {
  return (
    <>
    <Header />
    <div className='bg-[#f7f6ee] w-full'>
      <div className="h-[550px] w-full realtive text-7xl object-fill scroll-auto font-serif text-[#0a0902]">
        <img src={metadata[1]?.image ?? " "} alt=""  className="w-full h-full object-cover"/>
        <p className="absolute top-80 right-0 left-96 ml-48">{metadata[1]?.name ?? ""}</p>
      </div>
      <div className="flex justify-center items-center bg-[#ddddce]">
        <div className=" bg-[#f8f8e0] w-[900px] p-2.5">
          <h1 className="text-4xl font-bold">Systems that are meant to offer protection and security</h1>
          <div className="flex items-center text-[18px] font-sans pt-6">
            <p>As applications and systems scale</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Security

{/* <img src={metadata.find((_, index) => index === 1)?.image ?? ""} alt="" /> */}
{/* <img src={metadata[1]?.image ?? ""} alt="" /> */}