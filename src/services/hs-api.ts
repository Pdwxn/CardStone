import axios from "axios";

const API_BASE_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";
const API_KEY = import.meta.env.VITE_API_KEY;

export const hearthstoneApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-rapidapi-key': `${API_KEY}`, 
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  },
});

export const getAllCards = async () => {
  try {
    const response = await hearthstoneApi.get("/cards");
    console.log("Datos de la API:", response.data)
    return response.data;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    throw error;
  }
};

export const getInfo = async () => {
  try {
    const response = await hearthstoneApi.get("/info");
    console.log("Datos de la API:", response.data)
    return response.data;
  } catch (error) {
    console.error("Error al obtener la info:", error);
    throw error;
  }
};

