import axios from "axios";

// Örnek GET isteği
export const getData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    return response.data;
  } catch (error) {
    console.error("API isteği sırasında hata:", error);
    throw error;
  }
};

// Örnek POST isteği
export const postData = async (data) => {
  try {
    const response = await axios.post("https://api.example.com/data", data);
    return response.data;
  } catch (error) {
    console.error("API isteği sırasında hata:", error);
    throw error;
  }
};
