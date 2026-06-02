import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Email is required!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:300/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("HTTP status error, failed to send");

      setSubscribed(true);
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      console.error("Error subscribing to email", err);
      setError("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex-col items-center mb-8">
      <p className="text-center text-xl font-serif">
        Subscribe to our daily newspaper
      </p>

      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex justify-between lg:w-3xl gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-4 w-full m-2 p-3 pr-2 border"
            placeholder="Enter your email"
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-[#9e2b2b] hover:bg-[#ebb8b8] p-2 text-white"
          >
            {loading ? "Loading.." : "Submit"}
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <Link to={'/signup'} className="bg-[#7760776c] w-32 rounded-md text-xl p-1">Get Started</Link>
      </div>

      {error &&  <p className="text-red-700 mt-2 bg-[#eeeaea] fixed bottom-0 left-0 right-0 p-3 rounded-md w-[200px]">{error}</p>}
      {subscribed && !loading && (
        <p className="text-green-700 mt-2 bg-[#eef0e9] fixed bottom-0 left-0 right-0 p-3 rounded-md w-[200px]">Successfully subscribed!</p>
      )}
    </div>
  );
};

export default Newsletter;
