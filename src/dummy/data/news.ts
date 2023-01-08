import { addDays } from 'date-fns';

import { News } from '@/domains/news/types';

import { DUMMY_PNG } from '../asset';

export const DUMMY_ARTICLE_DATA: News = {
  newsID: 'dummy_news_id',
  title:
    '東アフリカエリアのコーヒー好き必見！ポテトフレーバーについて理解しよう',
  category: 'Recipe',
  thumbImage: DUMMY_PNG,
  createdAt: new Date().toString(),
  period: null,
  author: 'Admin_1',
  contents: `#ここにはMDファイルを入れる`,
  participants: [],
};

export const getDummyArticleList = (n: number) => {
  const arr = [...new Array(n).fill(DUMMY_ARTICLE_DATA)].map((d, i) => {
    const targetDate = new Date(d.createdAt);
    return {
      ...d,
      createdAt: addDays(targetDate, -i * 15).toString(),
    };
  });

  return arr;
};
