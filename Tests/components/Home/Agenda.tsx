

// import React from 'react'

// const Agenda = () => {
//   return (
//     <div className='flex justify-between h-[300px] w-full bg-[#fcfcf0e1]'>
//         <div className='flex items-center text-5xl font-semibold text-[#464543] tracking-[1px] m-2'>
//             <p>Developing<span className='underline font-extrabold'>Innovative</span> Solutions to build the next native intelligent <span className='font-extrabold text-[#3d3232]'>Systems</span></p>
//         </div>
//         <div className='flex items-center text-3xl tracking-[-1px] m-2 '>
//             <p>Developing the next <span className='text-red-500'>frontier</span> technology through Research and Innovations into intelligent systems  and <span className='underline'>autonomous</span> systems</p>
//         </div>
//         <hr/>
//     </div>
//   )
// }

// export default Agenda
///////////////////////////////////
import React from "react";

const Agenda = () => {
  return (
    <section className="w-full bg-[#fcfcf0e1] p-4 md:p-6 lg:p-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 h-auto">
        {/* Left Section */}
        <div className="flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#464543] tracking-wide md:tracking-[1px]">
          <p className="text-center md:text-left">
            Developing{" "}
            <span className="underline font-extrabold">Innovative</span> Solutions
            to build the next native intelligent{" "}
            <span className="font-extrabold text-[#3d3232]">Systems</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-tight md:tracking-[-1px]">
          <p className="text-center md:text-left">
            Developing the next{" "}
            <span className="text-red-500">frontier</span> technology through
            Research and Innovations into intelligent systems and{" "}
            <span className="underline">autonomous</span> systems
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-6 border-gray-200" />
    </section>
  );
};

export default Agenda;
