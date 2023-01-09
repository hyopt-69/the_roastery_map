import { News } from '@/domains/news/types';

import { readClient } from '../client';
import { ResponseNewsItem } from '../types';
import { parseNewsItem } from '../utils/parser';

const END_POINT = 'news';

// Newsの全件取得
export const fetchNewsList = async () => {
  const { contents } = await readClient.getList<ResponseNewsItem>({
    endpoint: END_POINT,
  });

  const newsList = contents.map((item) => parseNewsItem(item));

  return newsList;
};

// Newsの単体取得
export const fetchNewsDetail = async (newsId: News['newsID']) => {
  const res = await readClient.getListDetail<ResponseNewsItem>({
    endpoint: END_POINT,
    contentId: newsId,
  });

  const newsItem = parseNewsItem(res);

  return newsItem;
};
