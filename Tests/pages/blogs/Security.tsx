


import { metadata } from "../blogs/meta_data"
import Header from '../../components/Home/Header'
import Footer from "../../components/Home/Footer"

const Security = () => {
  return (
    <>
    <Header />
    <div className='bg-[#f7f6ee] w-full'>
      <div className="h-[550px] w-full realtive text-7xl object-fill scroll-auto font-serif text-[#0a0902] mb-1">
        <img src={metadata[0]?.image ?? " "} alt=""  className="w-full h-full object-cover"/>
        <p className="absolute top-80 right-0 left-96 ml-48">{metadata[0]?.name ?? ""}</p>
      </div>
      <div className="flex justify-center items-center bg-[#ddddce]">
        <div className=" bg-[#f8f8e0] w-[900px] p-2.5">
          <h1 className="text-4xl font-bold">Systems that are meant to offer protection and security</h1>
          <div className="flex-col items-center text-[18px] font-sans pt-6 ">
            <p>These are systems that  offer protection and security to user data, information and ensures that there is secured privacy.</p>
            <p>Most applications are not secure, data breaches occurs everyday and many devices like cellphones, laptops, televisions fall in the
              trap of being hacked. Most of these systems are often not that secured and 
            they often have some privacy altered with. </p>
            <p>Many of the users who use these devices do not often know if there devices have been
             pawned by attackers, they often realize this later when they cannot access 
            some of there credentials, social media pages among others. This is disastrous.</p>
            <p>These systems needs to always stay secured for users. At Ibonnis we are 
              intoducing secure systems intelligence, these are native form of intelligence that are mean’t to secure user information and user data from getting 
              in the wrong hands. They are meant to offer maximum security to user privacy.</p>
            <h1 className="pt-2.5 text-[#3b3b3b] text-xl font-medium">The SSI offer protection in the following ways:</h1>
              <ol className=" flex-col gap-1.5 ">
                <li>1. Notifying users of spam messages immediately</li>
                <li>2. Blocking security threats that may occur to users device in realtime</li>
                <li>3. Protecting user credentials </li>
                <li>4. Notifying user of vulnerability within their systems</li>
                <li>5. Performing security checks every 24 hours</li>
              </ol>
              <div className="w-auto h-[500px] relative mb-5">
                <img src={`${metadata.find((_, index) => index === 2)?.image ?? ""}`} alt="" 
                className="w-full h-full object-cover rounded-tr-[200px] rounded-bl-[200px]"
                 />
                 <p className="absolute top-40 text-[#fbfce1] left-40">{metadata[0]?.name ?? ""}: <span className="text-[16px] text-[#f3ff49] tracking-[-1px]">Systems meant to protect</span></p>
              </div>
              <p className="text-center font-stretch-50% text-[#888885]">
                The SSI is to ensure users privacy is secured and no data breaches get to happen.
              </p>
              <p className="tracking-[-1px]">
                The SSI  system will be available for desktops, mobiles and other gadgets and users will be able to install the system on there systems
              </p>
              <p className="text-center font-medium text-xl tracking-[-0.8px] text-red-400">At Ibonnis we value your security.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Security

{/* <img src={metadata.find((_, index) => index === 1)?.image ?? ""} alt="" /> */}
{/* <img src={metadata[1]?.image ?? ""} alt="" /> */}