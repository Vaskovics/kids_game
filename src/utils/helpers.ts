import { Letter } from "../types/Letter";

export const getRandomIndex = (letterArr: Letter[]) => {
  return Math.floor(Math.random() * letterArr.length);
}