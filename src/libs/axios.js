import axios from "axios";
import { getAccessToken } from "@/utils/storage";

//axios 커스텀

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// join login빼고 다 헤더에 토큰
instance.interceptors.request.use((config) => {
  if (config.url === "/join" || config.url === "/login") {
    delete config.headers.Authorization;
    return config;
  }
  const token = getAccessToken();
  if (token) {
    console.log("Interceptor - Authorization:", token);
    config.headers.Authorization = token;
  }
  return config;
});

export default instance;
