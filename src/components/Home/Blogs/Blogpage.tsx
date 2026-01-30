

// import React from 'react'
// import Navbar from '../../Navbar'
// import Footer from '../Footer'
// import { Images } from '../../../assets/images/images'


// interface imageProps {
//   id: number;
//   image: string;
//   description: string;
//   author: string;
//   link: string;
// }

// const Blogpage: React.FC = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className='mt-24'>
//         <div>
//           Get the latest blogs at IBONNIS
//         </div>
//         <div className='grid grid-cols-2'>
//           {Images.map((item) => (
//             <a href={item.link} key={item.id} className='w-[600px] h-[500px] rounded-md shadow-md m-3'>
//               <img src={item.image} alt=""  className='w-full object-cove'/>
//               <p>{item.author}</p>
//               <p className='text-[#5f5e5e] font-bold  '>{item.description}...</p>
//             </a>
//           ))}
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default Blogpage


import React, { useState } from 'react'
import Navbar from '../../Navbar'
import Footer from '../Footer'
import { Images } from '../../../assets/images/images'
import { HiArrowRight } from 'react-icons/hi'

const Blogpage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="w-full bg-linear-to-br from-blue-50 via-white to-indigo-100 pt-24 pb-12 sm:pb-16 lg:pb-20">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Latest Blogs at <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-600">IBONNIS</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover insights, tips, and stories from industry experts about technology, design, and career development
            </p>
          </div>

          {/* Category/Filter Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-8 sm:mt-10">
            {['All', 'Technology', 'Design', 'Career'].map((category) => (
              <button
                key={category}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {Images.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:scale-105 transform"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.description}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredId === item.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    5 min read
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                  {/* Author Info */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-r from-red-500 to-red-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-900">{item.author}</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>

                  {/* Title/Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-3 group-hover:text-red-600 transition-colors duration-300 grow">
                    {item.description}
                  </h3>

                  {/* Footer with Arrow */}
                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-200">
                    <span className="text-xs sm:text-sm font-semibold text-red-600 group-hover:text-red-700 transition-colors">
                      Read Article
                    </span>
                    <HiArrowRight
                      className={`text-red-600 transition-all duration-300 ${
                        hoveredId === item.id ? 'translate-x-2 text-red-700' : ''
                      }`}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-linear-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blogpage
