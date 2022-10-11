import { User } from '@skedule/model';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage<User | undefined>('user', undefined);
export const userEmailAtom = atom<string | undefined>(
  (get) => get(userAtom)?.email
);
export const userPicturelAtom = atom<string | undefined>(
  (get) => get(userAtom)?.picture
);
export const userAccessTokenAtom = atom<
  string | undefined,
  string | undefined,
  void
>(
  (get) => get(userAtom)?.access_token,
  (get, set, token) => {
    const user = get(userAtom);
    if (user) {
      user.access_token = token;
    }
    set(userAtom, user);
  }
);
