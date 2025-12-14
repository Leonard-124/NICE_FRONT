
// //import React from 'react'

// import Auth from "./auth"
// import Supabasetest from "./Supabasetest"
// import { useState , useEffect} from "react"
// import { supabase } from "../../../superbase-client"

// const Supa = () => {
//     const [session, setSession] = useState<any>(null)

//     const fetchSession = async () => {
//         const currentSession = await supabase.auth.getSession();
//         console.log(currentSession);
//         setSession(currentSession.data.session);
//     }

//     useEffect(() => {
//         fetchSession();
//     },[]);

//     const {data: authListener} = supabase.auth.onAuthStateChange{
//         (_event, session) => (
//             setSession(session)
//         )
//     }

//     const logout = async () => {
//         await supabase.auth.signOut()
//     }
//   return (
//     <>
//     {session ? (
//         <>
//         <button onClick={logout}>Log Out</button>
//         <Supabasetest />
//         </>
//     ) : (
//         <Auth />
//     )}
//     </>
//   )
// }

// export default Supa
