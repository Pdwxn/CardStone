export interface Card {
  artist?: string;
  cardId: string;
  cardSet: string;
  dbfId: number;
  locale: string;
  name: string;
  faction?: string;
  flavor?: string;
  playerClass: string;
  text: string;
  type: string;

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
}

export interface MechanicsCard {
  name: string;
}