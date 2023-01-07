import { Prefecture } from '@/constants/prefectures';

type Link = {
  // ウェブサイトのURL
  website: Nullable<string>;
  // instagramのURL
  instagram: Nullable<string>;
};

type Address = {
  // 都道府県のみ
  prefecture: Prefecture;
  // 都道府県から番地まで全て
  fullAddress: string;
};

export type Shop = {
  shopID: string;
  // 店名
  name: string;
  // 店名(カタカナ)
  nameKatakana: string;
  // 住所
  address: Nullable<Address>;
  // 電話番号
  phoneNumber: Nullable<string>;
  // リンク
  links: Link;
};
