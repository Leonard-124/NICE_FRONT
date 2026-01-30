// import { useState, useEffect, useRef, useCallback } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// import hire from "../../assets/images/hire.jpg";
// import jobb from "../../assets/images/jobb.jpg";
// import learn from "../../assets/images/learn.jpg";
// import learnin from "../../assets/images/learnin.jpg";

// type Slide = {
//   text: string;
//   image: string;
//   link: string;
// };

// const slides: Slide[] = [
//   {
//     text: "Get hired fast with our jobs",
//     image: hire,
//     link: `${import.meta.env.VITE_API_UR}/jobs`,
//   },
//   {
//     text: "You matter to us, get in touch with us.",
//     image: jobb,
//     link: `${import.meta.env.VITE_API_UR}/jobs`,
//   },
//   {
//     text: "Be the first to get certified",
//     image: learn,
//     link: `${import.meta.env.VITE_API_UR}/courses`,
//   },
//   {
//     text: "Start your learning path today.",
//     image: learnin,
//     link: `${import.meta.env.VITE_API_UR}/courses`,
//   },
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [showSlide, setShowSlide] = useState<boolean>(false);
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const advanceSlide = useCallback((direction: number = 1) => {
//     setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
//   }, []);

//   const startAutoPlay = useCallback(() => {
//     intervalRef.current = setInterval(() => advanceSlide(1), 8000);
//   }, [advanceSlide]);

//   const stopAutoPlay = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSlide(true);
//       startAutoPlay();
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//       stopAutoPlay();
//     };
//   }, [startAutoPlay, stopAutoPlay]);

//   if (!showSlide) {
//     return (
//       <div className="text-center py-4 text-lg font-medium text-gray-600">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div
//       className="flex flex-col gap-4 w-full mt-20"
//       onMouseEnter={stopAutoPlay}
//       onMouseLeave={startAutoPlay}
//     >
//       <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/70 rounded-lg shadow-lg p-4 h-[20rem] sm:h-[28rem] md:h-[36rem] lg:h-[44rem]">
//         {/* Left Arrow */}
//         <button
//           className="text-3xl p-2 hover:text-blue-500 transition md:self-center"
//           onClick={() => advanceSlide(-1)}
//         >
//           <HiChevronLeft />
//         </button>

//         {/* Text + Link */}
//         <div className="flex flex-col items-center justify-center text-center px-4 md:px-8">
//           <p
//             key={currentIndex}
//             className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-4 transition-transform duration-700 ease-in-out transform scale-105"
//           >
//             {slides[currentIndex].text}
//           </p>
//           <a
//             href={slides[currentIndex].link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-red-400 text-white px-4 py-2 rounded-md text-sm sm:text-base md:text-lg hover:bg-red-500 transition-transform duration-500 hover:scale-105 shadow-md"
//           >
//             Visit Link
//           </a>
//         </div>

//         {/* Image + Right Arrow */}
//         <div className="flex items-center w-full md:w-2/3">
//           <div className="relative w-full h-[16rem] sm:h-[20rem] md:h-[28rem] lg:h-[36rem] overflow-hidden rounded-md">
//             <img
//               key={currentIndex}
//               src={slides[currentIndex].image}
//               alt={slides[currentIndex].text}
//               className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform scale-105 hover:scale-110"
//             />
//           </div>
//           <button
//             className="text-3xl p-2 hover:text-blue-500 transition md:self-center"
//             onClick={() => advanceSlide(1)}
//           >
//             <HiChevronRight />
//           </button>
//         </div>
//       </div>

//       {/* Progress Dots */}
//       <div className="flex gap-2 mt-4 justify-center">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`h-2 w-6 sm:w-10 md:w-12 rounded-full transition-colors duration-500 ${
//               index === currentIndex ? "bg-red-500" : "bg-gray-300"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;



import { useState, useEffect, useRef, useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

//import hire from "../../assets/images/hire.jpg";
//import jobb from "../../assets/images/jobb.jpg";
//import learn from "../../assets/images/learn.jpg";
//import learnin from "../../assets/images/learnin.jpg";

type Slide = {
  text: string;
  image: string;
  link: string;
};

const slides: Slide[] = [
  {
    text: "Helping startups build there empire with technology",
    image: "https://cdn.careerfoundry.com/en/wp-content/uploads/2022/03/The_choice_of_free_coding_courses_online_is_almost_endless.webp",
    link: `${import.meta.env.VITE_API_UR}/apply`,
  },
  {
    text: "Get our latest trends on tech.",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Fgmh0Hdtjy5tL-zfaHUTEg.png",
    link: `${import.meta.env.VITE_API_UR}/blogs`,
  },
  {
    text: "Browse our courses and jobs to get the ones that suit you.",
    image: "https://cdn.careerfoundry.com/en/wp-content/uploads/2023/12/ux-reddit.webp",
    link: `${import.meta.env.VITE_API_UR}/courses`,
  },
  {
    text: "Be part of us, bring your idea and turn it to life",
    image: "https://cdn.careerfoundry.com/en/wp-content/uploads/2024/03/developers-arent-going-anywhere.webp",
    link: `${import.meta.env.VITE_API_UR}/courses`,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showSlide, setShowSlide] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advanceSlide = useCallback((direction: number = 1) => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, []);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => advanceSlide(1), 8000);
  }, [advanceSlide]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlide(true);
      startAutoPlay();
    }, 1000); // Reduced from 2000 for better UX

    return () => {
      clearTimeout(timer);
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  // Restart auto-play when manually navigating
  useEffect(() => {
    stopAutoPlay();
    const resumeTimer = setTimeout(startAutoPlay, 3000);
    return () => clearTimeout(resumeTimer);
  }, [currentIndex, startAutoPlay, stopAutoPlay]);

  if (!showSlide) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded-lg w-48 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded-lg w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-20"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Main Slider Container */}
      <div className="relative w-full bg-linear-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 min-h-80 sm:min-h-96 lg:min-h-screen lg:max-h-[600px]">
          
          {/* Left Arrow - Desktop */}
          <button
            onClick={() => advanceSlide(-1)}
            disabled={isTransitioning}
            className="hidden lg:flex absolute left-4 lg:relative items-center justify-center w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          {/* Text + Link Section */}
          <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 flex-1 min-h-48 lg:min-h-full">
            <div className="mb-6 lg:mb-8">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-semibold mb-4">
                IBONNIS {currentIndex + 1} of {slides.length}
              </span>
              
              <p
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {slides[currentIndex].text}
              </p>
            </div>

            {/* CTA Button */}
            <a
              href={slides[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Explore More</span>
              <HiChevronRight className="text-xl" />
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-none h-56 sm:h-72 md:h-96 lg:h-full overflow-hidden rounded-xl shadow-xl">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].text}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  isTransitioning ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                } hover:scale-110`}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Arrow - Desktop */}
          <button
            onClick={() => advanceSlide(1)}
            disabled={isTransitioning}
            className="hidden lg:flex absolute right-4 lg:relative items-center justify-center w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Next slide"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="lg:hidden flex items-center justify-between gap-2 px-4 sm:px-6 py-4 bg-white/50 backdrop-blur">
          <button
            onClick={() => advanceSlide(-1)}
            disabled={isTransitioning}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#213655] hover:bg-blue-600 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="text-xl" />
          </button>
          
          <div className="flex-1 text-center text-xs sm:text-sm font-semibold text-gray-700">
            {currentIndex + 1} / {slides.length}
          </div>

          <button
            onClick={() => advanceSlide(1)}
            disabled={isTransitioning}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-6 sm:mt-8 justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              stopAutoPlay();
              const resumeTimer = setTimeout(startAutoPlay, 4000);
              return () => clearTimeout(resumeTimer);
            }}
            className={`transition-all duration-500 rounded-full hover:bg-red-400 ${
              index === currentIndex
                ? "h-3 w-10 sm:w-12 lg:w-16 bg-red-500 shadow-lg"
                : "h-3 w-6 sm:w-8 lg:w-10 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;