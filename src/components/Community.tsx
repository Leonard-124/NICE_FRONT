import Footer from "./Home/Footer";
import Navbar from "./Navbar";

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="mt-24 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Get Community Support Instantly
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Welcome to the NICETEA community hub — a place where learners, job seekers, and professionals 
          connect, share experiences, and support each other. Whether you’re looking for advice, 
          mentorship, or collaboration, you’ll find it here.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 md:px-12 lg:px-20 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3"> Connect</h2>
          <p className="text-gray-600">
            Meet like-minded individuals, join discussions, and expand your professional network.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3"> Learn</h2>
          <p className="text-gray-600">
            Access shared resources, tutorials, and insights from experts in different fields.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3"> Grow</h2>
          <p className="text-gray-600">
            Get guidance on career paths, job applications, and skill development to achieve your goals.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-700 mb-3"> Share</h2>
          <p className="text-gray-600">
            Contribute your knowledge, experiences, and success stories to inspire others in the community.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
