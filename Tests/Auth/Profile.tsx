import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // While the initial /auth/profile check is in flight
  if (loading) {
    return <div className="centered">Loading...</div>;
  }

  // Guard against null — TS knows `user` is User | null, so this is
  // required, and it's also your real-world fallback if the session
  // expired between page load and render.
  if (!user) {
    navigate("/login", { replace: true });
    return null;
  }

  return (
    <div className="centered">
      <h1>Welcome, {user.displayName ?? user.username ?? user.email}</h1>
      {user.avatarUrl && (
        <img src={user.avatarUrl} alt="avatar" className="avatar" />
      )}
      <p>{user.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}