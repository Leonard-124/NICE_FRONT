
// import { Navigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// import { useAuth } from "./Authcontext"

// interface children {

// }
// export default function ProtectedRoute({ children}) {
//   const { user, isLoading } = useAuth();

//   if (isLoading) return <div className="centered">Loading...</div>;
//   if (!user) return <Navigate to="/login" replace />;

//   return children;
// }

import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "./Authcontext";  

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) return <div className="centered">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
}