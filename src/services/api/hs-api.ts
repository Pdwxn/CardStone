import axios from "axios";
import { Card } from "../../models/card";
import { Filters } from "../../models/filters";

const API_BASE_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";
const API_KEY = import.meta.env.VITE_API_KEY;

export const hearthstoneApi = axios.create({
  baseURL: API_BASE_URL,
  params: {
    collectible: '1',
    locale: 'enUS'
  },
  headers: {
    'x-rapidapi-key': `${API_KEY}`, 
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  },
});

export const getPaginatedAllCards = async (
  page: number,
  pageSize: number,
  filters: Filters
): Promise<Card[]> => {
  try {
    const params: Record<string, string | number | undefined> = {
      locale: filters.locale || "enUS",
      collectible: filters.collectible ?? 1,
      cost: filters.cost,
      attack: filters.attack,
      health: filters.health,
    };

    const response = await hearthstoneApi.get("/cards/", { params });

    const allCards = response.data;
    const flattenedCards = Object.values(allCards).flat() as Card[];

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCards = flattenedCards.slice(startIndex, endIndex);

    return paginatedCards;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    return [];
  }
};

export const getAllCards = async (): Promise<Card[]> => {
  try {
    const response = await hearthstoneApi.get("/cards/");

    const allCards = response.data;
    const flattenedCards = Object.values(allCards).flat() as Card[];

    const cardsWithImages = flattenedCards.filter((card) => card.img);

    const limitedCards = cardsWithImages.slice(0, 12);

    console.log("Cartas limitadas:", limitedCards);
    console.log("Datos de la API (sin procesar):", response.data);
    return limitedCards;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    return [];
  }
};

export const getClassicsCards = async (): Promise<Card[]> => {
  try {
    const response = await hearthstoneApi.get("cards/sets/Classics");

    const allCards = response.data;
    const flattenedCards = Object.values(allCards).flat() as Card[];

    const cardsWithImages = flattenedCards.filter((card) => card.img);

    const limitedCards = cardsWithImages.slice(0, 28);

    console.log("Cartas limitadas:", limitedCards);
    console.log("Datos de la API (sin procesar):", response.data);
    return limitedCards;
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    return [];
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

