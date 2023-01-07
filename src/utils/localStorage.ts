import { Roaster } from '@/domains/roaster/types';

type Storage = {
  favoriteRoasters: Roaster['roasterID'][];
};

/**
 * localStorageから値を取得するための関数
 * @returns storage内のvalue
 */
export const getLocalStorage = <Key extends keyof Storage>(
  key: Key
): Nullable<Storage[Key]> => {
  const value = localStorage.getItem(key);

  if (value !== null) {
    return JSON.parse(value) as Storage[Key];
  }
  return null;
};

/**
 * localStorageに値を上書き保存するための関数
 */
export const setLocalStorage = <Key extends keyof Storage>(
  key: Key,
  value: Storage[Key]
) => {
  localStorage.setItem(key, JSON.stringify(value));
};
