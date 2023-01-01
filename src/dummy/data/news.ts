import { News } from '@/domains/news/types';

import { DUMMY_PNG } from '../asset';

export const DUMMY_ARTICLE_DATA: News = {
  title:
    '東アフリカエリアのコーヒー好き必見！ポテトフレーバーについて理解しよう',
  category: 'Event',
  thumbImage: DUMMY_PNG,
  createdAt: new Date().toString(),
  author: 'K.O',
};

export const getDummyArticleList = (n: number) =>
  [...new Array(n)].map((_) => DUMMY_ARTICLE_DATA);
