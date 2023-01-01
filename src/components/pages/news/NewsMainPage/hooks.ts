import { useCallback, useState } from 'react';

import { News, NewsCategory } from '@/domains/news/types';
import { getDummyArticleList } from '@/dummy/data/news';

export const useNewsMainPage = () => {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All');
  const [newsList] = useState<News[]>(getDummyArticleList(10));

  const handleClickHeaderItem = useCallback((category: NewsCategory) => {
    setActiveCategory(category);
  }, []);

  const handleClickCardItem = useCallback((id: News['id']) => {
    console.log(id);
  }, []);

  return {
    activeCategory,
    newsList,
    handleClickHeaderItem,
    handleClickCardItem,
  };
};
