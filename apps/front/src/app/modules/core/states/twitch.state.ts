import { Creator } from '@skedule/model';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const tokenAtom = atomWithStorage<string | undefined>(
  'twitch_token',
  undefined
);
export const creatorsAtom = atom<Creator[]>([]);
