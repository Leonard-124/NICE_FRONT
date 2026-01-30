
// const About = () => {
//   return (
//     <div className='flex items-center w-5xl '>
//       <div className='flex flex-col gap-3.5 text-2xl font-light space-x-9'>
//         <p>IBONNI SYSTEMS is a software development company that is focused mainly on building, sales and marketing of various softwares, products and services. Some of the softwares include websites, Apps, IoT Devices, AI Chatbots,Robots,  and ARM Devices. </p>
//         <p>We Foster Innovation and creativity by providing an enabling environment where developers, engineers, physicists, biologists, chemists, inventors and technocrats get to meet and share their thoughts as they prepare for the job markets and sharpening of their skills.</p>
//         <p>
//           We are happy to get you onboard with us as we continue to impact and transform lives through technology. We believe that technology and innovation is the only way that humanity has a chance of surviving and adapting to their environment quickly.
//         </p>
//         <p>
//           We believe that daily commitments will make you reach your goals faster. Our vision is to impact humanity with our technology in fields of health, security, agriculture and finance.
//         </p>
//         <p>
//           We welcome you to be part of us in this journey. Our mission is to enable you get what you want with Technology.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default About;
/////////////////////////////////////////////////////////////////////////////

import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            About IBONNI SYSTEMS
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Building software, devices and services that empower creators and
            professionals to solve real problems.
          </p>
        </header>

        <div className="prose max-w-none text-base sm:text-lg leading-relaxed">
          <div className="md:columns-2 md:gap-8">
            <p className="mb-6 break-inside-avoid">
              IBONNI SYSTEMS is a software development company Founded by Leonard Oduor, its focused on building,
              selling and marketing a variety of software products and services.
              Our portfolio includes websites, mobile and desktop apps, IoT devices,
              AI chatbots, robotics solutions and ARM-based devices.
            </p>

            <p className="mb-6 break-inside-avoid">
              We foster innovation and creativity by providing an enabling environment
              where developers, engineers, physicists, biologists, chemists,
              inventors and technocrats meet, share ideas, and sharpen skills to
              prepare for the job market.
            </p>

            <p className="mb-6 break-inside-avoid">
              We are pleased to welcome you aboard as we continue to impact and transform
              lives through technology. We believe technology and innovation are key
              to helping humanity adapt and thrive in a changing world.
            </p>

            <p className="mb-6 break-inside-avoid">
              Daily commitments and steady practice help you reach your goals faster.
              Our vision is to positively impact health, security, agriculture and
              finance through practical technology solutions.
            </p>

            <p className="mb-6 break-inside-avoid">
              Join us on this journey. Our mission is to enable you to achieve your
              objectives with technology — providing tools, mentorship and collaboration
              opportunities that scale with your ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
