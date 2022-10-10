import { Roaster } from '@/app/domains/roaster';

import { DUMMY_PNG } from './asset';

export const DUMMY_ROASTER_DATA: Roaster = {
  name: 'DummyCoffee',
  nameKatakana: 'ダミーコーヒー',
  address: '東京都千代田区千代田1-1',
  prefecture: 'TOKYO',
  images: [DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG],
};
