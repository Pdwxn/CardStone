import axios from "axios";
import { Card } from "../../models/card";
import { Filters } from "../../models/filters";
import { CardBacks } from "../../models/cardbacks";

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

    const cardsWithImages = flattenedCards.filter((Card) => Card.img);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCards = cardsWithImages.slice(startIndex, endIndex);

    console.log("Cartas con imagenes limitadas:", paginatedCards);
    console.log("Datos de la API (sin procesar):", response.data);

    return paginatedCards;
  } catch (error) {
    console.error("Error al obtener el dorso de las cartas:", error);
    return [];
  }
};

export const getPaginatedCardBacks = async (
  page: number,
  pageSize: number,
): Promise<CardBacks[]> => {
  try {
    const response = await hearthstoneApi.get("/cardbacks/");

    const allCardBacks = response.data;
    const flattenedCards = Object.values(allCardBacks).flat() as CardBacks[];

    const cardsWithImages = flattenedCards.filter((CardBacks) => CardBacks.img);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCards = cardsWithImages.slice(startIndex, endIndex);

    console.log("Cartas con imagenes limitadas:", paginatedCards);
    console.log("Datos de la API (sin procesar):", response.data);

    return paginatedCards;
  } catch (error) {
    console.error("Error al obtener el dorso de las cartas:", error);
    return [];
  }
};

export const getPaginatedCardBySets = async (
  page: number,
  pageSize: number,
  filters: Filters,
  cardSetName: string,
): Promise<Card[]> => {
  try {
    const params: Record<string, string | number | undefined> = {
      locale: filters.locale || "enUS",
      collectible: filters.collectible ?? 1,
      cost: filters.cost,
      attack: filters.attack,
      health: filters.health,
    };

    const response = await hearthstoneApi.get(`cards/sets/${cardSetName}`, { params });

    const cardBySets = response.data;
    const flattenedCards = Object.values(cardBySets).flat() as Card[];

    const cardsWithImages = flattenedCards.filter((Card) => Card.img);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCards = flattenedCards.slice(startIndex, endIndex);

    const limitedCards = cardsWithImages.slice(0, 12);

    console.log("Dorso de cartas limitadas:", limitedCards);
    console.log("Datos de la API (sin procesar):", response.data);
    return paginatedCards;
  } catch (error) {
    console.error("Error al obtener el dorso de las cartas:", error);
    return [];
  }
};

export const getPaginatedCardByClasses = async (
  page: number,
  pageSize: number,
  filters: Filters,
  className: string,
): Promise<Card[]> => {
  try {
    const params: Record<string, string | number | undefined> = {
      locale: filters.locale || "enUS",
      collectible: filters.collectible ?? 1,
      cost: filters.cost,
      attack: filters.attack,
      health: filters.health,
    };

    const response = await hearthstoneApi.get(`cards/classes/${className}`, { params });

    const cardByClasses = response.data;
    const flattenedCards = Object.values(cardByClasses).flat() as Card[];

    const cardsWithImages = flattenedCards.filter((card) => card.img);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCards = cardsWithImages.slice(startIndex, endIndex);

    console.log("Cartas con imagenes limitadas:", paginatedCards);
    console.log("Datos de la API (sin procesar):", response.data);

    return paginatedCards;
  } catch (error) {
    console.error("Error al obtener el dorso de las cartas:", error);
    return [];
  }
};
