import { useEffect, useState } from "react";
import jobb from "../../assets/images/jobb.jpg";
import learn from "../../assets/images/learnin.jpg";
import hire from "../../assets/images/hire.jpg";

const images = [jobb, learn, hire];

const Experts = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[20rem] sm:h-[28rem] md:h-[36rem] lg:h-[44rem] mt-6 overflow-hidden rounded-lg shadow-2xl">
      {/* Background image */}
      <img
        src={images[currentImage]}
        alt={`Expert ${currentImage + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 lg:px-20 text-center md:text-left gap-6">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg max-w-xl">
          Meet the Experts in various fields who are ready to guide you into a career path of your own.
        </p>
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-white drop-shadow-lg max-w-lg">
          This is the place where experience meets reward.
        </p>
      </div>
    </div>
  );
};

export default Experts;

