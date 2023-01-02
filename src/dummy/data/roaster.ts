import { Roaster } from '@/domains/roaster/types';

import { DUMMY_PNG } from '../asset';
import { DUMMY_URL } from '../url';

export const DUMMY_ROASTER_DATA: Roaster = {
  id: 'dummy_id',
  name: 'DummyCoffee',
  nameKatakana: 'ダミーコーヒー',
  address: '東京都千代田区千代田1-1',
  prefecture: 'TOKYO',
  thumbImage: DUMMY_PNG,
  images: [DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG],
  websiteUrl: DUMMY_URL,
  instagramUrl: DUMMY_URL,
  introduction:
    'ダミーのコーヒーショップです。もちろん行ったことはないよ。だって存在しないもの。',
  openingDate: new Date(),
  closedDate: null,
  weeklySchedule: {
    mon: null,
    tue: null,
    wed: null,
    thu: null,
    fri: null,
    sat: null,
    sun: null,
  },
  holiday: '毎月第2・第3月曜日',
  roastingDepth: 'dark',
  brewingMethods: ['paperDrip'],
  wholeSalers: [{ name: 'oroshisaki Cafe', websiteURL: DUMMY_URL }],
  smokingAvailability: 'noSmokable',
  chargingAvailability: 'noChargeable',
  physicalStoreAvailability: 'noPresent',
  seatingAvailability: 'OnlySeats',
};
