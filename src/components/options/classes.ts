export const CLASS_NAME_TO_HSJSON: Record<string, string> = {
  "Death Knight": "DEATHKNIGHT",
  "Demon Hunter": "DEMONHUNTER",
  Druid: "DRUID",
  Hunter: "HUNTER",
  Mage: "MAGE",
  Paladin: "PALADIN",
  Priest: "PRIEST",
  Rogue: "ROGUE",
  Shaman: "SHAMAN",
  Warlock: "WARLOCK",
  Warrior: "WARRIOR",
};

const classes = Object.keys(CLASS_NAME_TO_HSJSON);

export default classes;
