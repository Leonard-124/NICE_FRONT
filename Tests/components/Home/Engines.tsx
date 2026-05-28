import React, { useState, useEffect } from "react";
import future from "../../../src/assets/images/image2/business.jpg";
import systems from "../../../src/assets/images/image2/native_ai.jpg";
import rocket from "../../../src/assets/images/rocket.png";

const toolview = [
  {
    img: future,
    name: "AYx new",
    description: "Advanced model that will enable usage in context",
    impact: "Reduced crime rates",
  },
  {
    img: systems,
    name: "Humanize AA",
    description: "An infamous model",
    impact: "Easy model context",
  },
  {
    img: rocket,
    name: "ArtContext",
    description: "Advanced model for connecting to local machines",
    impact: "Machine to Human cognition",
  },
];

const Engines = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % toolview.length),
      8000
    );
    return () => clearInterval(timer);
  }, []);

  const currentItem = toolview[index];

  return (
    <div className="h-[500px] m-2 bg-[#ffffff] rounded-t-2xl shadow-md">
      <div className="grid grid-cols-3 divide-x divide-gray-400">
        {/* Tools Section */}
        <div className="flex flex-col items-center p-4">
          <h1 className="bg-[#fdfcfc] text-[#383434] font-bold text-lg w-full text-center py-1 tracking-[1px]">
            Tools
          </h1>
          <div className="relative w-full mt-3">
            <img
              src={currentItem.img}
              alt={currentItem.name}
              className="w-full h-90 object-cover rounded-r-2xl"
            />
            <p className="absolute top-2 left-4 font-bold text-white text-lg drop-shadow-md">
              {currentItem.name}
            </p>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="flex flex-col items-center p-4">
          <h1 className="bg-[#f3f0f0] text-[#383434] font-bold text-lg w-full text-center py-1 tracking-[1px]">Use cases</h1>
          <p className="text-gray-700 text-center">{currentItem.description}</p>
          <p className="text-gray-700 text-center">{currentItem.description}</p>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col items-center p-4">
          <h1 className="bg-[#f3f0f0] text-[#383434] font-bold text-lg w-full text-center py-1 tracking-[1px]">Impact</h1>
          <p className="text-gray-700 text-center">{currentItem.impact}</p>
          <p className="text-gray-700 text-center">{currentItem.impact}</p>
        </div>
      </div>
    </div>
  );
};

export default Engines;




