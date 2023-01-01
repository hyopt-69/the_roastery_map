import { useCallback, useState } from 'react';

import { NewsCategory } from '@/domains/news/types';

export const useNewsMainPage = () => {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('All');

  const handleClickHeaderItem = useCallback((category: NewsCategory) => {
    setActiveCategory(category);
  }, []);

  return { activeCategory, handleClickHeaderItem };
};
