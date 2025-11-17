import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Apply() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read job title and status from URL
  const jobTitleFromURL = searchParams.get("job") || "Unknown Job";
  const jobStatusFromURL = searchParams.get("status") || "open";

  // Form states
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  // Job info states
  const [jobType, setJobType] = useState(jobTitleFromURL);
  const [jobStatus] = useState(jobStatusFromURL);

  // UI states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const savedJob = localStorage.getItem("jobType");
    if (!jobType && savedJob) setJobType(savedJob);
  }, [jobType]);

  useEffect(() => {
    if (jobStatus === "closed") {
      setErrMsg("🚫 This job is no longer accepting applications.");
    }
  }, [jobStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrMsg("");
    setSuccess("");

    if (jobStatus === "closed") {
      setErrMsg("This job is no longer available.");
      return;
    }

    if (!fullname || !email || !resume) {
      setErrMsg("Full name, email, and resume are required.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullname);
    formData.append("email", email);
    formData.append("jobType", jobType);
    formData.append("linkedin", linkedin);
    formData.append("portfolio", portfolio);
    formData.append("message", message);
    formData.append("resume", resume);

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/v1/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      setSuccess("🎉 Your application has been submitted!");
      setFullname("");
      setEmail("");
      setLinkedin("");
      setPortfolio("");
      setResume(null);
      setMessage("");

      setTimeout(() => navigate("/"), 4000);
    } catch (err: any) {
      setErrMsg(err.message || "Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-red-600 text-center">
          Apply for {jobType || "Job"}
        </h1>

        {/* Job CLOSED Warning */}
        {jobStatus === "closed" && (
          <p className="bg-red-100 text-red-800 p-3 rounded-md mb-4 text-center font-medium">
            🚫 This job is no longer available.
          </p>
        )}

        {/* Error Message */}
        {errMsg && (
          <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">
            {errMsg}
          </p>
        )}

        {/* Success Message */}
        {success && (
          <p className="bg-green-100 text-green-800 p-3 rounded-md mb-4 text-center">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-400"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-400"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block font-semibold mb-1">Job</label>
            <p className="w-full px-4 py-2 bg-gray-100 border rounded-md">
              {jobType}
            </p>
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block font-semibold mb-1">LinkedIn</label>
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="LinkedIn profile URL"
            />
          </div>

          {/* Portfolio */}
          <div>
            <label className="block font-semibold mb-1">Portfolio</label>
            <input
              type="url"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Portfolio website URL"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block font-semibold mb-1">Upload Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files?.[0] || null)}
              className="w-full border p-2 rounded-md bg-gray-50"
              required
            />
          </div>

          {/* Additional Message */}
          <div>
            <label className="block font-semibold mb-1">Additional Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-400"
              rows={4}
              placeholder="Write something..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || jobStatus === "closed"}
            className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}


