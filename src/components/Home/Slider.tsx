import { useState, useEffect, useRef, useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import hire from "../../assets/images/hire.jpg";
import jobb from "../../assets/images/jobb.jpg";
import learn from "../../assets/images/learn.jpg";
import learnin from "../../assets/images/learnin.jpg";

type Slide = {
  text: string;
  image: string;
  link: string;
};

const slides: Slide[] = [
  {
    text: "Get hired fast with our jobs",
    image: hire,
    link: "http://localhost:5173/jobs",
  },
  {
    text: "You matter to us, get in touch with us.",
    image: jobb,
    link: "http://localhost:5173/jobs",
  },
  {
    text: "Be the first to get certified",
    image: learn,
    link: "http://localhost:5173/courses",
  },
  {
    text: "Start your learning path today.",
    image: learnin,
    link: "http://localhost:5173/courses",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showSlide, setShowSlide] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advanceSlide = useCallback((direction: number = 1) => {
    setCurrentIndex((prev) => (prev + direction + slides.length) % slides.length);
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
    }, 2000);

    return () => {
      clearTimeout(timer);
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  if (!showSlide) {
    return (
      <div className="text-center py-4 text-lg font-medium text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-4 w-full mt-20"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/70 rounded-lg shadow-lg p-4 h-[20rem] sm:h-[28rem] md:h-[36rem] lg:h-[44rem]">
        {/* Left Arrow */}
        <button
          className="text-3xl p-2 hover:text-blue-500 transition md:self-center"
          onClick={() => advanceSlide(-1)}
        >
          <HiChevronLeft />
        </button>

        {/* Text + Link */}
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-8">
          <p
            key={currentIndex}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-4 transition-transform duration-700 ease-in-out transform scale-105"
          >
            {slides[currentIndex].text}
          </p>
          <a
            href={slides[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-400 text-white px-4 py-2 rounded-md text-sm sm:text-base md:text-lg hover:bg-red-500 transition-transform duration-500 hover:scale-105 shadow-md"
          >
            Visit Link
          </a>
        </div>

        {/* Image + Right Arrow */}
        <div className="flex items-center w-full md:w-2/3">
          <div className="relative w-full h-[16rem] sm:h-[20rem] md:h-[28rem] lg:h-[36rem] overflow-hidden rounded-md">
            <img
              key={currentIndex}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].text}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform scale-105 hover:scale-110"
            />
          </div>
          <button
            className="text-3xl p-2 hover:text-blue-500 transition md:self-center"
            onClick={() => advanceSlide(1)}
          >
            <HiChevronRight />
          </button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-4 justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-6 sm:w-10 md:w-12 rounded-full transition-colors duration-500 ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
