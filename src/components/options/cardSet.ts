export const CARD_SET_NAME_TO_HSJSON: Record<string, string> = {
  Classic: "EXPERT1",
  "Goblins vs Gnomes": "GVG",
  "The Witchwood": "GILNEAS",
  "Rastakhan's Rumble": "TROLL",
  "Rise of Shadows": "DALARAN",
  "Saviors of Uldum": "ULDUM",
  "Scholomance Academy": "SCHOLOMANCE",
  "United in Stormwind": "STORMWIND",
  "Ashes of Outland": "DEMON_HUNTER_INITIATE",
  "Forged in the Barrens": "BARRENS",
  "Descent of Dragons": "DRAGONS",
  "Madness at the Darkmoon Faire": "DARKMOON_FAIRE",
  "Fractured in Alterac Valley": "ALTERAC_VALLEY",
  "Voyage to the Sunken City": "THE_SUNKEN_CITY",
};

const cardSets = Object.keys(CARD_SET_NAME_TO_HSJSON);

export default cardSets;
