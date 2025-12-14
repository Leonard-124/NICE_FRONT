import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

type User = {
  id?: string;
  username: string;
  email: string;
  role?: string;
};

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("No access token found. Please log in.");
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_UR}/api/profile/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => null);
          throw new Error(errData?.error || `HTTP error ${res.status}`);
        }

        const result = await res.json();
        setUser(result.user);
      } catch (err: any) {
        setError(err.message);
        console.error("Profile fetch error:", err);
        navigate('/login')
      }
    };

    fetchUser();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!user) return <div className="text-gray-500">Loading...</div>;

  return (
    <>
    <Navbar />
        <div className="w-80 bg-white shadow-md rounded-lg p-6 border border-gray-200 mt-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Welcome:</span> {user.username}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user.email}
        </p>
        {user.role && (
          <p>
            <span className="font-medium">Role:</span> {user.role}
          </p>
        )}
      </div>
    </div>
    </>

  );
};

export default Profile;