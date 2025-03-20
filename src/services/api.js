import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: { "Content-Type": "application/json" },
});

// 🔹 API çağrılarında token'i otomatik ekle
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token; // Bearer kaldırıldı
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
