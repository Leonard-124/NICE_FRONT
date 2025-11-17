import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        const res = await axios.get("http://localhost:3000/api/v1/get");
        setJobs(res.data);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <div className="p-6 text-center text-lg">Loading jobs...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  const goToApply = (job: Job) => {
    localStorage.setItem("jobType", job.title);
    navigate(`/apply?job=${encodeURIComponent(job.title)}&id=${job._id}`);
  };

  const isUnavailable = (job: Job) =>
    job.available === "no" || job.available === "closed" || job.available === false;

  return (
    <div className="p-6 font-sans mt-24 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Available Jobs
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 bg-white flex flex-col justify-between"
          >
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>

              <p className="text-gray-700 mt-2 line-clamp-3">{job.description}</p>

              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>
                  <strong>Company:</strong> {job.company}
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                {job.salary && (
                  <p>
                    <strong>Salary:</strong> {job.salary}
                  </p>
                )}
                <p>
                  <strong>Status:</strong>{" "}
                  {isUnavailable(job) ? (
                    <span className="text-red-600 font-semibold">Not Available</span>
                  ) : (
                    <span className="text-green-700 font-semibold">Open</span>
                  )}
                </p>
              </div>
            </div>

            <button
              onClick={() => goToApply(job)}
              disabled={isUnavailable(job)}
              className={`mt-4 w-full px-4 py-2 rounded-b-xl font-semibold transition 
                ${
                  isUnavailable(job)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              {isUnavailable(job) ? "Not Available" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
