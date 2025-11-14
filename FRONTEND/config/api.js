// src/config/api.js
import axios from "axios";

// Base URL without "/api" for things like images, uploads, etc.
export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace("/api", "") || "http://localhost:5000";

// Axios instance with "/api" prefixed
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Assuming you store JWT in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
