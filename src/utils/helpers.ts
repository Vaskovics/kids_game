import { CardType } from "../types/CardType";

export const getRandomIndex = (letterArr: CardType[]) => {
  return Math.floor(Math.random() * letterArr.length);
}