export interface MechanicsCard {
  name: string;
}

export interface HearthstoneJsonCard {
  artist?: string;
  attack?: number;
  cardClass?: string;
  classes?: string[];
  collectible?: boolean;
  cost?: number;
  dbfId: number;
  elite?: boolean;
  faction?: string;
  flavor?: string;
  health?: number;
  id: string;
  mechanics?: string[];
  name: string;
  rarity?: string;
  referencedTags?: string[];
  set?: string;
  spellSchool?: string;
  text?: string;
  type?: string;
}

export interface Card {
  id: string;
  artist?: string;
  cardId: string;
  cardSet: string;
  cardClass: string;
  dbfId: number;
  locale: string;
  name: string;
  faction?: string;
  flavor?: string;
  playerClass: string;
  set: string;
  text?: string;
  type?: string;

  img?: string;
  imgGold?: string;

  collectible?: boolean;
  howToGetSignature?: string;
  rarity?: string;
  elite?: boolean;
  attack?: number;
  health?: number;
  cost?: number;

  mechanics?: MechanicsCard[];
  referencedTags?: string[];
  spellSchool?: string;
  classes?: string[];
}
