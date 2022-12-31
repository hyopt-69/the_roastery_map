import { Prefecture } from '../../constants/prefectures';

export type Roaster = {
  // 店名
  name: string;
  // 店名(カタカナ)
  nameKatakana: string;
  // サムネイル写真
  thumbImage: string;
  // 店舗の写真
  images: [string, ...string[]];
  // 住所
  address: string;
  // 住所(都道府県)
  prefecture: Prefecture;
};
