import { Link } from "react-router-dom";
//import job from "../../assets/images/hire.jpg";

const Dream = () => {
  return (
    <div className="relative w-full h-96 md:h-128 mt-8 shadow-2xl bg-gray-200">
      {/* Background image */}
      <img
        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*2U5qU1qnwUjgjrvR8l3h9w.jpeg"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg">
          Lets make softwares and architectures together, Be Part of the team
        </p>

        <Link
          to="/apply"
          className="mt-6 bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md text-lg sm:text-xl shadow-md transition-colors"
        >
          Apply Now and Join Us
        </Link>
      </div>
    </div>
  );
};

export default Dream;
