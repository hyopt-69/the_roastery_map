import { Roaster } from '@/domains/roaster/types';

import { DUMMY_PNG } from '../asset';
import { DUMMY_URL } from '../url';

export const DUMMY_ROASTER_DATA: Roaster = {
  roasterID: 'dummy_Roaster_id',
  shopID: 'dummy_Shop_id',
  name: 'DummyCoffee',
  nameKatakana: 'ダミーコーヒー',
  address: {
    prefecture: 'TOKYO',
    fullAddress: '東京都千代田区千代田1-1',
  },
  phoneNumber: '000-0000-0000',
  links: {
    website: DUMMY_URL,
    instagram: DUMMY_URL,
  },
  thumbImage: DUMMY_PNG,
  introduction:
    'ダミーのコーヒーショップです。もちろん行ったことはないよ。だって存在しないもの。',
  openingDate: new Date(),
  closedDate: null,
  weeklySchedule: [{ day: 0, open: '12:00', close: '20:00' }],
  holidayInfo: '毎月第2・第3月曜日',
  roastingDepth: 'dark',
  brewingMethods: ['paperDrip'],
  wholeSalers: [],
  smokingAvailability: 'noSmokable',
  chargingAvailability: 'noChargeable',
  seatAvailability: 'benchSeats',
  hasPhysicalStore: true,
};
