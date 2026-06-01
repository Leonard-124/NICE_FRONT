
import React from 'react'

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'
import api, {setAccessToken, clearAccessToken } from './api'


interface User {
    id: number;
    email: string;
    username: string;
}

interface AuthContextValue {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({children}: {children: ReactNode}) { // restores session from httponly cookie
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    (async () => {
        try {
            const {data: refreshData} = await api.post("/auth/refresh");
            setAccessToken(refreshData.accessToken);
            const {data: meData } = await api.get("/auth/me");
            setUser(meData.user);
            // initCart(String(meData.user.id))
        } catch (err: unknown) {
            const status = (err as { response?: { status?: number}})?.response?.status;
            if (status !== 401 && status !== 403) {
                console.warn("Silent refresh failed:", err);
            };
            clearAccessToken();
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    })();
}, []);

const login = useCallback(
    async(email: string, password: string) => {
        const { data } = await api.post("/auth/login", {email, password});
        setAccessToken(data.accessToken);
        setUser(data.user)
    },[]
);

const logout = useCallback(async () => {
    try {
        await api.post("/auth/logout");
    } catch (err) {
        console.error(err)
    }finally {
        clearAccessToken();
        // clearCartSession();
        setUser(null)
    }
}, []);

const register = useCallback(
    async (username: string, email: string, password: string, confirmPassword: string) => {
        await api.post("/auth/register", {username, email, password, confirmPassword});
    },
    []
);

return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, login, logout, register}}>
        {children}
    </AuthContext.Provider>
);
}


export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error("useAuth must be used within AuthProvider");
    
}


// def
 
// position_of
// (
// letter
// )
// :
 
// # ...
// 2
// alphabet_start
 
// =
 
// ord
// (
// 'a'
// )
// 3
// return
 
// ord
// (
// letter
// ) 
// -
 
// alphabet_start
// 4
// def
 
// letter_at
// (
// position
// )
// :
 
// # ...
// 5
// alphabet_start
 
// =
 
// ord
// (
// 'a'
// )
// 6
// return
 
// chr
// (
// position
 
// +
 
// alphabet_start
// )
// 7
// def
 
// shift_number
// (
// position
// , 
// n
// )
// :
 
// # ...
// 8
// return
//  (
// position
 
// +
 
// n
// ) 
// %
 
// 26
// 9
// def
 
// is_lowercase
// (
// letter
// )
// :
 
// # ...
// 10
// return
 
// letter
 
// in
 
// "abcdefghijklmnopqrstuvwxyz"
// 11
// def
 
// shift
// (
// letter
// , 
// n
// )
// :
// 12
// if
 
// is_lowercase(letter)
// :
// 13
// pos
 
// =
 
// position_of
// (
// letter
// )
// 14
// shifted
 
// =
 
// shift_number
// (
// pos
// , 
// n
// )
// 15
// return
 
// letter_at(shifted)
// 16
// return
 
// letter
// 17
// 18
// message
 
// =
 
// "jk, awcha eo ej pda beniwiajp"
// 19
// # clue: shift forward 4
// for
 
// letter
 
// in
 
// message
// :
// 21
// print
// (
// shift(letter, 4)
// , 
// end
// =
// ""
// )