import { atom } from "jotai";

export const listAtom = atom<number[]>([]);
export const filteredListAtom = atom((get) => {
  const list = get(listAtom);
  return list.filter((num) => num % 2 === 0);
});
