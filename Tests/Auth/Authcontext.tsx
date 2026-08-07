
// import React from 'react'

// import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'
// import api, {setAccessToken, clearAccessToken } from './api'


// interface User {
//     id: number;
//     email: string;
//     username: string;
// }

// interface AuthContextValue {
//     user: User | null;
//     isLoading: boolean;
//     isAuthenticated: boolean;
//     login: (email: string, password: string) => Promise<void>;
//     logout: () => Promise<void>;
//     register: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>;
//     loginwithgoogle?: () => void;
//     logoutwithgoogle?: () => Promise<void>;
//     refreshUser?: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextValue | null>(null);

// export function AuthProvider({children}: {children: ReactNode}) { // restores session from httponly cookie
//     const [user, setUser] = useState<User | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//     (async () => {
//         try {
//             const {data: refreshData} = await api.post("/auth/refresh");
//             setAccessToken(refreshData.accessToken);
//             const {data: meData } = await api.get("/auth/me");
//             setUser(meData.user);
//             // initCart(String(meData.user.id))
//         } catch (err: unknown) {
//             const status = (err as { response?: { status?: number}})?.response?.status;
//             if (status !== 401 && status !== 403) {
//                 console.warn("Silent refresh failed:", err);
//             };
//             clearAccessToken();
//             setUser(null);
//         } finally {
//             setIsLoading(false);
//         }
//     })();
// }, []);

// /////////googleauth///////

// const refreshUser = async() => {
//     try {
//         const res = await api.get("/auth/profile");
//         setUser(res.data.user);

//     } catch {
//         setUser(null)
//     } finally {
//         setIsLoading(false)
//     }
// };

// useEffect(() => {
//     refreshUser()
// }, []);

// const loginwithgoogle  = () => {
//     window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
// }

// const logoutwithgoogle = async() => {
//     await api.post("/auth/logout");
//     setUser(null)
// }

// const login = useCallback(
//     async(email: string, password: string) => {
//         const { data } = await api.post("/auth/login", {email, password});
//         setAccessToken(data.accessToken);
//         setUser(data.user)
//     },[]
// );

// const logout = useCallback(async () => {
//     try {
//         await api.post("/auth/logout");
//     } catch (err) {
//         console.error(err)
//     }finally {
//         clearAccessToken();
//         // clearCartSession();
//         setUser(null)
//     }
// }, []);

// const register = useCallback(
//     async (username: string, email: string, password: string, confirmPassword: string) => {
//         await api.post("/auth/register", {username, email, password, confirmPassword});
//     },
//     []
// );

// return (
//     <AuthContext.Provider value={{ user, isLoading,  isAuthenticated: !!user, login, logout, register, loginwithgoogle, logoutwithgoogle, refreshUser}}>
//         {children}
//     </AuthContext.Provider>
// );
// }


// // export function useAuth(): AuthContextValue {
// //     const ctx = useContext(AuthContext);
// //     if(!ctx) throw new Error("useAuth must be used within AuthProvider");
    
// // }
// export function useAuth(): AuthContextValue {
//     const ctx = useContext(AuthContext);
//     if (!ctx) throw new Error("useAuth must be used within AuthProvider");
//     return ctx;
// }


////////////////Test//////////////////////////////////////
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import api from "./api";

// Define the shape of a user — adjust fields to match your API response.
interface User {
  id: string;
  email: string;
  username?: string
  displayName?: string;
  avatarUrl?: string;
  // ...add other fields your /auth/profile returns
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: () => void;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const res = await api.get("/auth/profile");
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = () => {
    // Full page redirect — this must NOT be an axios/fetch call.
    // The OAuth handshake requires the browser itself to navigate
    // to Google, not an XHR request.
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}