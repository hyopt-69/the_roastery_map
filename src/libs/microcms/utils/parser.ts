import { News } from '@/domains/news/types';
import { Shop } from '@/domains/shop/types';

import { ResponseNewsItem, ResponseShopItem } from '../types';

// MicroCMSからのレスポンスをShop型にパースする。
export const parseShopItem = (item: ResponseShopItem): Shop => {
  const shopItem: Shop = {
    shopID: item.id,
    name: item.name,
    nameKatakana: item.nameKatakana,
    phoneNumber: item.phoneNumber || null,
    address: item.address
      ? {
          prefecture: item.address.prefecture[0],
          fullAddress: item.address.fullAddress,
        }
      : null,
    links: {
      website: item.links?.website || null,
      instagram: item.links?.instagram || null,
    },
  };

  return shopItem;
};

// MicroCMSからのレスポンスをNews型にパースする。
export const parseNewsItem = (item: ResponseNewsItem): News => {
  const newsItem: News = {
    newsID: item.id,
    title: item.title,
    createdAt: item.createdAt,
    thumbImage: item.thumbImage.url,
    category: item.category[0],
    author: item.author[0],
    article: item.article,
    period: item.period || null,
    participants: item.participants.map((p) => parseShopItem(p)),
  };

  return newsItem;
};
