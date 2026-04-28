// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// interface Job {
//   _id: string;
//   title: string;
//   description: string;
//   company: string;
//   location: string;
//   salary?: string;
//   available?: string | boolean;
//   createdAt: string;
// }

// export default function JobBox() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_UR}/api/v1/get`);
//         setJobs(res.data);
//       } catch (err) {
//         setError("Failed to load jobs");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);

//   if (loading) return <div className="p-6 text-center text-lg">Loading jobs...</div>;
//   if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

//   const goToApply = (job: Job) => {
//     localStorage.setItem("jobType", job.title);
//     {job.title == null ? navigate('/apply') : navigate(`/apply?job=${encodeURIComponent(job.title)}&id=${job._id}`); }
//   };

//   const isUnavailable = (job: Job) =>
//     job.available === "no" || job.available === "closed" || job.available === false;

//   return (
//     <div className="p-6 font-sans mt-24 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
//         Available Jobs
//       </h1>
//       <Link to={`/groups`}>Check this Out</Link>
//       {/* Responsive grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {jobs.map((job) => (
//           <div
//             key={job._id}
//             className="border rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 bg-white flex flex-col justify-between"
//           >
//             <div className="p-5">
//               <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>

//               <p className="text-gray-700 mt-2 line-clamp-3">{job.description}</p>

//               <div className="mt-3 text-sm text-gray-600 space-y-1">
//                 <p>
//                   <strong>Company:</strong> {job.company}
//                 </p>
//                 <p>
//                   <strong>Location:</strong> {job.location}
//                 </p>
//                 {job.salary && (
//                   <p>
//                     <strong>Salary:</strong> {job.salary}
//                   </p>
//                 )}
//                 <p>
//                   <strong>Status:</strong>{" "}
//                   {isUnavailable(job) ? (
//                     <span className="text-red-600 font-semibold">Not Available</span>
//                   ) : (
//                     <span className="text-green-700 font-semibold">Open</span>
//                   )}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={() => goToApply(job)}
//               disabled={isUnavailable(job)}
//               className={`mt-4 w-full px-4 py-2 rounded-b-xl font-semibold transition 
//                 ${
//                   isUnavailable(job)
//                     ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//             >
//               {isUnavailable(job) ? "Not Available" : "Apply"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiBriefcase, HiCurrencyDollar, HiArrowRight, HiCheckCircle } from "react-icons/hi";

interface Job {
  _id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  available?: string | boolean;
  createdAt: string;
}

export default function JobBox() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_UR}/api/v1/get`);
        setJobs(res.data);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-96 mt-24">
        <div className="text-center">
          <div className="animate-spin mb-4">
            <svg
              className="w-12 h-12 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <p className="text-gray-600 text-lg font-medium">Loading jobs...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-96 mt-24">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 sm:p-8 max-w-md text-center">
          <p className="text-red-600 text-lg font-semibold mb-2">An error occured </p>
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );

  const goToApply = (job: Job) => {
    localStorage.setItem("jobType", job.title);
    {
      job.title == null
        ? navigate("/apply")
        : navigate(`/apply?job=${encodeURIComponent(job.title)}&id=${job._id}`);
    }
  };

  const isUnavailable = (job: Job) =>
    job.available === "no" || job.available === "closed" || job.available === false;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-4">
                Available <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Jobs</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Discover exciting opportunities with top companies
              </p>
            </div>
            
            <Link
              to="/#"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span>Explore More</span>
              <HiArrowRight className="text-lg" />
            </Link>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="group relative h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
                    isUnavailable(job)
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {isUnavailable(job) ? (
                    <>
                      <span>🚫</span>
                      <span>Closed</span>
                    </>
                  ) : (
                    <>
                      <HiCheckCircle className="text-lg" />
                      <span>Open</span>
                    </>
                  )}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 grow">
                {/* Job Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 pr-24 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h2>

                {/* Company Name */}
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <HiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-700">
                    {job.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                  {job.description}
                </p>

                {/* Job Details */}
                <div className="space-y-2 sm:space-y-3">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <HiLocationMarker className="w-5 h-5 sm:w-5 sm:h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-semibold">Location</p>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Salary */}
                  {job.salary && (
                    <div className="flex items-start gap-3">
                      <HiCurrencyDollar className="w-5 h-5 sm:w-5 sm:h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 font-semibold">Salary</p>
                        <p className="text-sm sm:text-base text-gray-700 font-medium">
                          {job.salary}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => goToApply(job)}
                disabled={isUnavailable(job)}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                  isUnavailable(job)
                    ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                    : "bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg group-hover:shadow-lg active:scale-95"
                }`}
              >
                {isUnavailable(job) ? (
                  <>
                    <span>Position Closed</span>
                  </>
                ) : (
                  <>
                    <span>Apply Now</span>
                    <HiArrowRight className="text-lg" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">No jobs available at the moment</p>
            <p className="text-gray-500 text-sm sm:text-base">Check back later for new opportunities</p>
          </div>
        )}

        {/* Footer CTA */}
        {jobs.length > 0 && (
          <div className="mt-16 sm:mt-20 lg:mt-24 p-8 sm:p-10 lg:p-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Didn't find the right role?
              </h3>
              <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join our community to stay updated with new job postings and exclusive opportunities
              </p>
              <Link
                to="/community"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}