import axios from "axios";
import { Card, HearthstoneJsonCard } from "../../models/card";
import { Filters } from "../../models/filters";
import { CardBacks } from "../../models/cardbacks";
import {
  mapHearthstoneJsonCard,
  normalizeHsEnum,
} from "./hearthstone-json.mapper";
import { CARD_SET_NAME_TO_HSJSON } from "../../components/options/cardSet";
import { CLASS_NAME_TO_HSJSON } from "../../components/options/classes";

const API_BASE_URL = "https://api.hearthstonejson.com/v1";
const DEFAULT_LOCALE = "enUS";

export const hearthstoneApi = axios.create({
  baseURL: API_BASE_URL,
});

const cardCache = new Map<string, Promise<Card[]>>();

async function getAllCollectibleCards(locale = DEFAULT_LOCALE): Promise<Card[]> {
  if (!cardCache.has(locale)) {
    cardCache.set(
      locale,
      hearthstoneApi
        .get<HearthstoneJsonCard[]>(`/latest/${locale}/cards.collectible.json`)
        .then((response) =>
          response.data.map((card) => mapHearthstoneJsonCard(card, locale))
        )
    );
  }

  return cardCache.get(locale)!;
}

function applyFilters(cards: Card[], filters: Filters): Card[] {
  return cards.filter((card) => {
    if (
      filters.collectible !== undefined &&
      filters.collectible === 1 &&
      card.collectible === false
    ) {
      return false;
    }

    if (filters.cost !== undefined && card.cost !== filters.cost) {
      return false;
    }

    if (filters.attack !== undefined && card.attack !== filters.attack) {
      return false;
    }

    if (filters.health !== undefined && card.health !== filters.health) {
      return false;
    }

    return true;
  });
}

function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const startIndex = Math.max(page - 1, 0) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}

export const getSearchSuggestions = async (
  query: string
): Promise<string[]> => {
  if (query.trim().length <= 2) return [];

  try {
    const cards = await getAllCollectibleCards(DEFAULT_LOCALE);
    const normalizedQuery = query.trim().toLowerCase();

    return cards
      .filter((card) => card.name.toLowerCase().includes(normalizedQuery))
      .slice(0, 3)
      .map((card) => card.name);
  } catch (error) {
    console.error("Error al obtener las sugerencias:", error);
    return [];
  }
};

export const getPaginatedAllCards = async (
  page: number,
  pageSize: number,
  filters: Filters
): Promise<Card[]> => {
  try {
    const locale = filters.locale || DEFAULT_LOCALE;
    const cards = await getAllCollectibleCards(locale);

    return paginate(applyFilters(cards, filters), page, pageSize);
  } catch (error) {
    console.error("Error al obtener las cartas:", error);
    return [];
  }
};

export const getPaginatedCardBacks = async (
  page: number,
  pageSize: number
): Promise<CardBacks[]> => {
  void page;
  void pageSize;
  console.warn(
    "Card backs are currently unavailable because HearthstoneJSON does not expose a card back API."
  );
  return [];
};

export const getPaginatedCardBySets = async (
  page: number,
  pageSize: number,
  filters: Filters,
  cardSetName: string
): Promise<Card[]> => {
  try {
    const locale = filters.locale || DEFAULT_LOCALE;
    const cards = await getAllCollectibleCards(locale);
    const setValue = CARD_SET_NAME_TO_HSJSON[cardSetName] ?? cardSetName;
    const normalizedSet = normalizeHsEnum(setValue);
    const cardsBySet = applyFilters(cards, filters).filter(
      (card) => normalizeHsEnum(card.cardSet) === normalizedSet
    );

    return paginate(cardsBySet, page, pageSize);
  } catch (error) {
    console.error("Error al obtener cartas por set:", error);
    return [];
  }
};

export const getPaginatedCardByClasses = async (
  page: number,
  pageSize: number,
  filters: Filters,
  className: string
): Promise<Card[]> => {
  try {
    const locale = filters.locale || DEFAULT_LOCALE;
    const cards = await getAllCollectibleCards(locale);
    const classValue = CLASS_NAME_TO_HSJSON[className] ?? className;
    const normalizedClass = normalizeHsEnum(classValue);
    const cardsByClass = applyFilters(cards, filters).filter((card) => {
      const cardClass = normalizeHsEnum(card.cardClass);
      const multiClasses = card.classes?.map(normalizeHsEnum) ?? [];

      return cardClass === normalizedClass || multiClasses.includes(normalizedClass);
    });

    return paginate(cardsByClass, page, pageSize);
  } catch (error) {
    console.error("Error al obtener cartas por clase:", error);
    return [];
  }
};
