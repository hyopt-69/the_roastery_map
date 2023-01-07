import { useCallback, useState } from 'react';

import { News, NewsCategory } from '@/domains/news/types';
import { getDummyArticleList } from '@/dummy/data/news';

export const useNewsMainPage = () => {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All');
  const [newsList] = useState<News[]>(getDummyArticleList(10));

  const handleClickMenuItem = useCallback((category: NewsCategory) => {
    setActiveCategory(category);
  }, []);

  const handleClickCardItem = useCallback((id: News['newsID']) => {
    console.log(id);
  }, []);

  return {
    activeCategory,
    newsList,
    handleClickMenuItem,
    handleClickCardItem,
  };
};
