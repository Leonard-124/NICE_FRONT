// import React, { useState, useEffect } from "react";
// import future from "../../../src/assets/images/image2/business.jpg";
// import systems from "../../../src/assets/images/image2/native_ai.jpg";
// import rocket from "../../../src/assets/images/rocket.png";

// const toolview = [
//   {
//     img: future,
//     name: "Health systems",
//     description: (
//       <div className="flex-col items-center gap-1.5">
//         <p>Applicable by health providers  in diagnosis</p>
//         <p>Gadgets are used to monitor heart-rates</p>
//       </div>
//     ),
//     impact: (
//       <div className="flex-col items-center gap-1.5">
//         <p>Improved condition of patient</p>
//         <p>improvement in daily metabolic health</p>
//       </div>
//     ),
//   },
//   {
//     img: systems,
//     name: "Security systems",
//     description: (
//       <div className="flex-col items-center gap-1.5">
//         <p>Used to secure the privacy of users</p>
//         <p>Used to protect users from theft</p>
//       </div>
//     ),
//     impact: (
//       <div className="flex-col items-center gap-1.5">
//         <p>reduced data privacy leaks</p>
//         <p>improved user security</p>
//       </div>
//     ),
//   },
//   {
//     img: rocket,
//     name: "Smart Systems",
//     description: (
//       <div className="flex flex-col items-center gap-1.5">
//         <p>Used in air circulation e.g for air conditioning</p>
//         <p>Used in warming houses</p>
//         <p>Used to control the house equipments</p>
//       </div>
//     ),
//     impact: (
//       <div className="flex flex-col items-center gap-1.5">
//         <p>Improved air circulation</p>
//         <p>Improved house temperature</p>
//         <p>Faster responses in house appliances controls</p>
//       </div>
//     ),
//   },
//     {
//     img: rocket,
//     name: "Agro systems",
//     description: (
//       <div className="flex flex-col items-center gap-1.5">
//         <p>Used in providing better ways of farming.</p>
//         <p>Used to provide better environments for crop farming.</p>
//         <p>Used to ensure better crop yield.</p>
//       </div>
//     ),
//     impact: (
//       <div className=" flex flex-col items-center gap-1.5">
//         <p>Improved  soil fertility</p>
//         <p>Improved plant health</p>
//         <p>Better crop yield</p>
//       </div>
//     ),
//   },
// ];

// const Engines = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex((prev) => (prev + 1) % toolview.length),
//       8000
//     );
//     return () => clearInterval(timer);
//   }, []);

//   const currentItem = toolview[index];

//   return (
//     <div className="h-[500px] m-2 bg-[#ebebc6] rounded-t-2xl shadow-md">
//       <div className="grid grid-cols-3 divide-x divide-gray-100">
//         {/* Tools Section */}
//         <div className="flex flex-col items-center p-4">
//           <h1 className=" text-[#a79191] font-bold text-lg w-full text-center py-1 tracking-[-0.5px]">
//             Systems
//           </h1>
//           <div className="relative w-full mt-3">
//             <img
//               src={currentItem.img}
//               alt={currentItem.name}
//               className="w-full h-90 object-cover rounded-md"
//             />
//             <p className="absolute top-2 left-4 font-bold text-[#9fa75a] text-lg drop-shadow-md">
//               {currentItem.name}
//             </p>
//           </div>
//         </div>

//         {/* Use Cases Section */}
//         <div className="flex flex-col items-center p-4">
//           <h1 className=" text-[#836f6f] font-bold text-lg w-full text-center py-1 tracking-[-0.5px]">Implementation</h1>
//           <p className="text-gray-700 text-center font-sans">{currentItem.description}</p>
//           {/* <p className="text-gray-700 text-center font-sans">{currentItem.description}</p> */}
//         </div>

//         {/* Impact Section */}
//         <div className="flex flex-col items-center p-4">
//           <h1 className=" text-[#947d7d] font-bold text-lg w-full text-center py-1 tracking-[-0.5px]">Impact</h1>
//           <p className="text-gray-700 text-center font-serif">{currentItem.impact}</p>
//           {/* <p className="text-gray-700 text-center font-serif">{currentItem.impact}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Engines;
//////////////////////////////////////////////////////////
import  { useState, useEffect } from "react";
import future from "../../../src/assets/images/image2/business.jpg";
import systems from "../../../src/assets/images/image2/native_ai.jpg";
import rocket from "../../../src/assets/images/rocket.png";

const toolview = [
  {
    img: future,
    name: "Health systems",
    description: [
      "Applicable by health providers in diagnosis",
      "Gadgets are used to monitor heart-rates",
    ],
    impact: [
      "Improved condition of patient",
      "Improvement in daily metabolic health",
    ],
  },
  {
    img: systems,
    name: "Security systems",
    description: [
      "Used to secure the privacy of users",
      "Used to protect users from theft",
    ],
    impact: ["Reduced data privacy leaks", "Improved user security"],
  },
  {
    img: rocket,
    name: "Smart Systems",
    description: [
      "Used in air circulation e.g. for air conditioning",
      "Used in warming houses",
      "Used to control house equipment",
    ],
    impact: [
      "Improved air circulation",
      "Improved house temperature",
      "Faster responses in appliance controls",
    ],
  },
  {
    img: rocket,
    name: "Agro systems",
    description: [
      "Used in providing better ways of farming",
      "Used to provide better environments for crop farming",
      "Used to ensure better crop yield",
    ],
    impact: ["Improved soil fertility", "Improved plant health", "Better crop yield"],
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
    <section className="m-2 bg-[#f8f8e3] rounded-2xl shadow-md p-4 md:p-6 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {/* Systems Section */}
        <div className="flex flex-col items-center p-4">
          <h2 className="text-[#a79191] font-bold text-lg text-center mb-2">
            Systems
          </h2>
          <div className="relative w-full">
            <img
              src={currentItem.img}
              alt={currentItem.name}
              className="w-full h-48 md:h-64 object-cover rounded-md"
            />
            <p className="absolute top-2 left-4 font-bold text-[#9fa75a] text-lg drop-shadow-md">
              {currentItem.name}
            </p>
          </div>
        </div>

        {/* Implementation Section */}
        <div className="flex flex-col items-center p-4">
          <h2 className="text-[#836f6f] font-bold text-lg text-center mb-2">
            Implementation
          </h2>
          <ul className="text-gray-700 text-center font-sans space-y-1">
            {currentItem.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col items-center p-4">
          <h2 className="text-[#947d7d] font-bold text-lg text-center mb-2">
            Impact
          </h2>
          <ul className="text-gray-700 text-center font-serif space-y-1">
            {currentItem.impact.map((imp, i) => (
              <li key={i}>{imp}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Engines;





