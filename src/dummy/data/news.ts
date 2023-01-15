import { addDays } from 'date-fns';

import { News } from '@/domains/news/types';

import { DUMMY_PNG } from '../asset';
import { DUMMY_HTML } from '../html';

const getRandomCategory = (): News['category'] => {
  const r = Math.floor(Math.random() * 4);

  // "Other"は空にして空の時のUIを確認できるようにしておく
  switch (r) {
    case 1:
      return 'Event';
    case 2:
      return 'Recipe';
    case 3:
    default:
      return 'Report';
  }
};

export const DUMMY_ARTICLE_DATA: News = {
  newsID: 'dummy_news_id',
  title:
    '東アフリカエリアのコーヒー好き必見！ポテトフレーバーについて理解しよう',
  category: 'Recipe',
  thumbImage: DUMMY_PNG,
  createdAt: new Date().toString(),
  period: null,
  author: 'Admin_1',
  article: DUMMY_HTML,
  participants: [],
};

export const getDummyNewsList = (n: number) => {
  const arr = [...new Array(n).fill(DUMMY_ARTICLE_DATA)].map((d, i): News => {
    const targetDate = new Date(d.createdAt);
    return {
      ...d,
      category: getRandomCategory(),
      createdAt: addDays(targetDate, -i * 15).toString(),
    };
  });

  return arr;
};
