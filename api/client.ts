import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = axios.create({
  baseURL: "https://crud-app-backend-production-7b70.up.railway.app/api",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem("token");

    if (config.skipAuth) {
      return config;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

API.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("token");
      console.log("Session expired. Please login again.");
    }

    return Promise.reject(error.response?.data || error);
  },
);

export const api = {
  get: (url: string, config?: any) => API.get(url, config),
  post: (url: string, body: any, config?: any) => API.post(url, body, config),
};

export default api;
