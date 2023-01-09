import { MicroCMSListContent, MicroCMSImage } from 'microcms-js-sdk';

import { Prefecture } from '@/constants/prefectures';
import { News } from '@/domains/news/types';
import { Shop } from '@/domains/shop/types';

// MicroCMSのセレクトフィールド様の型(単体選択でも配列で返ってくる)
type MicroCMSSelectField<T> = [T, ...T[]];

// MicroCMSのカスタムフィールド様の型
type MicroCMSCustomField<T> = T extends { [key in string]: unknown }
  ? T & {
      fieldId: string;
    }
  : null;

// ShopApiのレスポンスの型
export type ResponseShopItem = MicroCMSListContent & {
  name: string;
  nameKatakana: string;
  phoneNumber?: string;
  address: MicroCMSCustomField<{
    fullAddress: NonNullable<Shop['address']>['fullAddress'];
    prefecture: MicroCMSSelectField<Prefecture>;
  }>;
  links?: MicroCMSCustomField<Shop['links']>;
};

// NewsApiのレスポンスの型
export type ResponseNewsItem = MicroCMSListContent & {
  title: News['title'];
  thumbImage: MicroCMSImage;
  category: MicroCMSSelectField<News['category']>;
  author: MicroCMSSelectField<News['author']>;
  article: News['article'];
  participants: ResponseShopItem[];
  period?: MicroCMSCustomField<NonNullable<News['period']>>;
};
