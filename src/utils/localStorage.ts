import { Roaster } from '@/domains/roaster/types';

type Storage = {
  favoriteRoasters: Roaster['id'][];
};

export const setLocalStorage = <Key extends keyof Storage>(
  key: Key,
  value: Storage[Key]
) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <Key extends keyof Storage>(
  key: Key
): Nullable<Storage[Key]> => {
  const value = localStorage.getItem(key);

  if (value !== null) {
    return JSON.parse(value) as Storage[Key];
  }
  return null;
};
