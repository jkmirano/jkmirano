import axios from "axios";
import { API_BASE_URL, TIMEOUT } from "./config";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
});

// Interceptor
httpClient.interceptors.request.use((config) => {
  // Add authorization headers or other configurations
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default httpClient;
