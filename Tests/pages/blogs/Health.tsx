
import React from 'react'
import Footer from "../../components/Home/Footer"
import Header from '../../components/Home/Header'
import { metadata } from './meta_data'

const Health = () => {
  return (
    <>
    <Header/>
    <div className='flex justify-center bg-[#afad98] mt-5 '>
      <div className='w-[1000px] bg-[#f5f5f1] pt-8 h-auto p-1'>
        <div className=' flex justify-between w-full h-[400px]'>
          <img src={metadata[2]?.image2 ?? " "} alt=""  className='w-full h-full object-cover rounded-tr-2xl'/>
          <h1 className='text-black text-3xl font-serif -tracking-[2px] mt-20 ml-1'>
            Health systems <br /> are  intelligent <br />
            native systems  that <br /> are  meant  to ensure
             that user health <br /> is guaranteed
          </h1>
        </div>
        <div className='flex flex-col items-center text-xl font-medium text-[#636262] gap-3 m-2.5'>
          <p>They try to understand the user mood, diet, and there basic health.</p>
          <p>
            Health systems are deployed as gadgets that 
            measure user blood pressure, metabolic activity, 
            heart rate, hormonal balance, cognitive activities, 
            liver and kidney health and can relay this  information through 
            Wirelessly to a trained health practitioner for analysis.
          </p>
          <p>
            In case of anomaly in heart  beat, metabolism the system sends immediate
            notification to the user to check there health if the situation gets worse
            whereby the user is unable to respond to pings from the systems the system 
            performs the stray dog protocol by calling an ambulance with valid evidence. 
          </p>
          <p>
            Including the users  real time heartbeat, body metabolism and critical
            areas like the kidney, liver e.t.c. This essentially helps health
            professions to gauge the seriousness of the situation and come prepared
             with the necessary medical equipment.
          </p>
          <p>
            The system also ensures that the user adheres to stringent health
            regulations such as ensuring the user does exercise per day, eats
            healthy foods regularly and user basic social lifestyle.
          </p>
          <div className='flex justify-between w-full h-[300px]'>
            <p>
            The system comes with inbuilt hardware tools <br /> that the user can
            use to check <br /> for thing like body fever, blood pressure, <br /> blood
            sugar level and there heart beat. <br /> These gadgets will be well
            suited to <br /> ensure the user is optimized for <br />  a much better
            experience.
            </p>
            <img src={metadata.find((_, index) => index === 2)?.image ?? ""} alt="" className='w-full object-cover rounded-[60px]' />
          </div>
          <p>
            Users will also be able to send there feedback for any grievances
            that may arose with the gadgets.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Health