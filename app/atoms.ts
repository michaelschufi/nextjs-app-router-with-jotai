import {atom} from 'jotai';

export const countAtom = atom(0);

export const doubleAtom = atom((get) => get(countAtom) * 2);

export const evenOddAtom = atom((get) => get(countAtom) % 2 === 0 ? `${get(countAtom)} is odd.` : `${get(countAtom)} is even.`);
