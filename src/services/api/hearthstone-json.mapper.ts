import { Card, HearthstoneJsonCard } from "../../models/card";

const CARD_RENDER_BASE_URL = "https://art.hearthstonejson.com/v1/render/latest";

export function buildCardImageUrl(
  cardId: string,
  locale = "enUS",
  resolution: "256x" | "512x" = "256x"
): string {
  return `${CARD_RENDER_BASE_URL}/${locale}/${resolution}/${cardId}.png`;
}

export function normalizeHsEnum(value?: string): string {
  return value?.trim().toUpperCase().replace(/ /g, "_") ?? "";
}

export function mapHearthstoneJsonCard(
  card: HearthstoneJsonCard,
  locale = "enUS"
): Card {
  const cardSet = card.set ?? "UNKNOWN";
  const cardClass = card.cardClass ?? "NEUTRAL";

  return {
    cardId: card.id,
    cardSet,
    playerClass: cardClass,
    img: buildCardImageUrl(card.id, locale, "256x"),
    imgGold: undefined,

    id: card.id,
    dbfId: card.dbfId,
    locale,
    name: card.name,
    set: cardSet,
    cardClass,
    text: card.text,
    type: card.type,
    rarity: card.rarity,
    artist: card.artist,
    faction: card.faction,
    flavor: card.flavor,
    collectible: card.collectible,
    elite: card.elite,
    attack: card.attack,
    health: card.health,
    cost: card.cost,
    mechanics: card.mechanics?.map((name) => ({ name })),
    referencedTags: card.referencedTags,
    spellSchool: card.spellSchool,
    classes: card.classes,
  };
}
