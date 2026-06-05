
// import React from 'react'
// import Footer from "../../components/Home/Footer"
// import Header from '../../components/Home/Header'
// import { metadata } from './meta_data'

// const Agro = () => {
//   return (
//     <>
//     <Header/>
//     <div className='flex justify-center bg-[#afad98] mt-5 '>
//       <div className='w-[1000px] bg-[#f5f5f1] pt-8 h-auto p-1'>
//         <div className=' flex justify-between w-full h-[400px]'>
//           <img src={metadata[3]?.image2 ?? " "} alt=""  className='w-full h-full object-cover rounded-tr-2xl'/>
//           <h1 className='text-black text-3xl font-serif -tracking-[2px] mt-20 ml-1'>
//           Agro - systems are <br /> intelligent native systems <br /> that will be applied <br />
//            in agriculture to <br /> improve production and ensure <br /> global food security.
//           </h1>
//         </div>
//         <div className='flex flex-col items-center text-xl font-medium text-[#636262] gap-3 m-2.5'>
//           <p>Agro systems will be able to detect diseases
//              in crops, dianose crops and suggest possible
//               remedies to be used for better farming</p>
//           <p>
//             These systems will be able to able to check for
//             soil fertility, soil water level in relation to
//             the crop at hand, it will then be able to regulate
//             the amount of water and fertilizer intake that
//             a given crop needs to take e.g rice
//           </p>
//           <p>
//             Agro systems will also be able to notify the farmer about
//              the health of the crops and the deficits that are needed
//               for the crops
//           </p>
//           <p className='text-gray-700'>
//              Agro systems will be applied in agriculture in the following ways:
//           </p>
//           <div>
//             <li>They will be used to monitor crops</li>
//             <li>They will be used to improve crop yield</li>
//             <li>They will be used to detect diseases in crops</li>
//             <li>They wil give farmers insights on how to improve their farming strategies</li>
//           </div>
//           <div className='flex justify-between w-full h-[300px]'>
//             <p>
//               Agro systems  come in various <br /> ways from gadgets to preinstalled <br />
//               apps that can be used to monitor <br /> crop health and crop lifecycle.
//             </p>
//             <img src={metadata.find((_, index) => index === 2)?.image ?? ""} alt="" className='w-full object-cover rounded-[60px]' />
//           </div>
//           <p>
//             Agro systems will be aimed at improving food security
//              and increasing food supply within the market.
//           </p>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default Agro;
//////////////////////////////////////////////////////
import React from 'react'
import Footer from "../../components/Home/Footer"
import Header from "../../components/Home/Header"
import { metadata } from './meta_data'

const Agro = () => {
  return (
    <>
      <Header/>
      <div className="flex justify-center bg-[#afad98] mt-5 px-4">
        <div className="w-full max-w-5xl bg-[#f5f5f1] pt-8 h-auto p-4 rounded-lg">
          
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:h-[400px]">
            <img 
              src={metadata[3]?.image2 ?? ""} 
              alt="Agro systems"  
              className="w-full md:w-1/2 h-64 md:h-full object-cover rounded-tr-2xl"
            />
            <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-serif tracking-tight md:mt-20 md:ml-2 text-center md:text-left">
              Agro-systems are <br /> intelligent native systems <br /> that will be applied <br />
              in agriculture to <br /> improve production and ensure <br /> global food security.
            </h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center text-base sm:text-lg md:text-xl font-medium text-[#636262] gap-4 mt-6">
            <p>
              Agro systems will be able to detect diseases in crops, diagnose crops and suggest possible remedies to be used for better farming.
            </p>
            <p>
              These systems will check soil fertility, soil water level in relation to the crop at hand, and regulate the amount of water and fertilizer intake that a given crop needs (e.g. rice).
            </p>
            <p>
              Agro systems will also notify the farmer about crop health and deficits that need attention.
            </p>
            <p className="text-gray-700 font-semibold">
              Agro systems will be applied in agriculture in the following ways:
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Monitor crops</li>
              <li>Improve crop yield</li>
              <li>Detect diseases in crops</li>
              <li>Provide insights to improve farming strategies</li>
            </ul>

            {/* Split Section */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:h-[300px] mt-4">
              <p className="md:w-1/2 text-center md:text-left">
                Agro systems come in various forms, from gadgets to preinstalled apps that can be used to monitor crop health and crop lifecycle.
              </p>
              <img 
                src={metadata.find((_, index) => index === 2)?.image ?? ""} 
                alt="Agro gadgets" 
                className="w-full md:w-1/2 h-64 md:h-full object-cover rounded-[30px]"
              />
            </div>

            <p className="mt-4">
              Agro systems aim to improve food security and increase food supply within the market.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Agro;
