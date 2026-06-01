
import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api"

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    timeout: 15000,
});


let _accessToken: string | null = null;

export function setAccessToken(token: string) {_accessToken = token; }
export function getAccessToken(): string | null { return _accessToken; }
export function clearAccessToken() { _accessToken = null; }

/** 
Attaches the access token
*/

api.interceptors.request.use( 
    (config) => {
        const token = getAccessToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);


let isRefreshing = false;
let failedQueue: Array<{resolve: (t: string) => void; reject: (e: unknown) => void }> = [];

function processQueue(error: unknown, token: string | null = null) {
    failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token!)));
    failedQueue = [];
}

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const orig = error.config;
        if(error.response?.status === 401 &&  !orig._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then((token) => {
                    orig.headers.Authorization = `Bearer ${token}`;
                    return api(orig);
                });
            }
            orig._retry = true;
            isRefreshing = true;
            try {
                const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {}, { withCredentials: true});
                setAccessToken(data.accessToken);
                processQueue(null, data.accessToken);
                orig.headers.Authorization = `Bearer ${data.accessToken}`;
                return api(orig);
            } catch (err) {
                processQueue(err, null);
                clearAccessToken();
                window.location.href = "/login"
            } finally {
                isRefreshing = false
            }
        }
        return Promise.reject(error);
    }
);

export default api;











