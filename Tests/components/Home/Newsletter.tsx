// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Newsletter = () => {
//   const [subscribed, setSubscribed] = useState<boolean>(false);
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e?: React.FormEvent) => {
//     if (e) e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!email) {
//       setError("Email is required!");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:300/email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       if (!res.ok) throw new Error("HTTP status error, failed to send");

//       setSubscribed(true);
//       setTimeout(() => navigate("/"), 3000);
//     } catch (err) {
//       console.error("Error subscribing to email", err);
//       setError("Failed to subscribe. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-full w-full flex-col items-center mb-8">
//       <p className="text-center text-xl font-serif">
//         Subscribe to our daily newspaper
//       </p>

//       <form onSubmit={handleSubmit} className="flex justify-center">
//         <div className="flex lg:w-3xl ">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="h-5 w-full m-2 p-3 pr-[-1px] border border-gray-400 focus:border-gray-500 relative"
//             placeholder="Enter your email"
//           />
//           <button
//             disabled={loading}
//             type="submit"
//             className="bg-[#9e2b2b] hover:bg-[#ebb8b8] p-1 text-white pl-2  rounded-r-md  absolute right-96 mt-1.5 pb-[-0.5px] cursor-pointer  focus-within:border-gray-700"
//           >
//             {loading ? "Loading.." : "Submit"}
//           </button>
//         </div>
//       </form>

//       <div className="flex justify-center">
//         <Link to={'/signup'} className="bg-[#7760776c] w-32 rounded-md text-xl p-1">Get Started</Link>
//       </div>

//       {error &&  <p className="text-red-700 mt-2 bg-[#eeeaea] fixed bottom-0 left-0 right-0 p-3 rounded-md w-[200px]">{error}</p>}
//       {subscribed && !loading && (
//         <p className="text-green-700 mt-2 bg-[#eef0e9] fixed bottom-0 left-0 right-0 p-3 rounded-md w-[200px]">Successfully subscribed!</p>
//       )}
//     </div>
//   );
// };

// export default Newsletter;
//////////////////////////////////////
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
      // clear error after 3s
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      const res = await fetch("https://nice-back.onrender.com/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("HTTP status error, failed to send");

      setSubscribed(true);
      // clear subscribed after 3s and navigate
      setTimeout(() => {
        setSubscribed(false);
        navigate("/");
      }, 3000);

    } catch (err) {
      console.error("Error subscribing to email", err);
      setError("Failed to subscribe. Please try again.");
      // clear error after 3s
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center mb-8 px-4">
      <p className="text-center text-lg sm:text-xl md:text-2xl font-serif mb-4">
        Subscribe to our daily newspaper
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center w-full max-w-lg"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 m-2 p-1 px-3 border border-gray-400 focus:border-gray-600 rounded-md text-sm sm:text-base"
          placeholder="Enter your email"
          id="newsletter"
        />
        <button
          disabled={loading}
          type="submit"
          className="m-2 px-3 py-1 bg-[#9e2b2b] hover:bg-[#ebb8b8] text-white rounded-md text-sm sm:text-base"
        >
          {loading ? "Loading.." : "Submit"}
        </button>
      </form>

      <div className="flex justify-center mt-4">
        <Link
          to="/signup"
          className="bg-[#7760776c] w-28 sm:w-32 rounded-md text-base sm:text-xl p-2 text-center"
        >
          Get Started
        </Link>
      </div>

      {error && (
        <p className="text-red-700 mt-4 bg-[#eeeaea] p-3 rounded-md text-sm sm:text-base max-w-xs text-center">
          {error}
        </p>
      )}
      {subscribed && !loading && (
        <p className="text-green-700 mt-4 bg-[#eef0e9] p-3 rounded-md text-sm sm:text-base max-w-xs text-center">
          Successfully subscribed!
        </p>
      )}
    </section>
  );
};

export default Newsletter;



