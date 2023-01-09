import { useCallback, useMemo, useState } from 'react';

import { News } from '@/domains/news/types';
import { useAppRouter } from '@/hooks/useAppRouter';

export const useNewsMainPage = (newsList: News[]) => {
  const { goTo } = useAppRouter();
  const [activeCategory, setActiveCategory] =
    useState<Select<News['category']>>('UnSelect');

  // FIXME: フィルター機能を追加する。
  const filteredNewsList = useMemo(() => {
    return newsList;
  }, [newsList]);

  const handleClickMenuItem: typeof setActiveCategory = useCallback(
    (category) => {
      setActiveCategory(category);
    },
    []
  );

  const handleClickCardItem = useCallback(
    (id: News['newsID']) => {
      goTo('NEWS', id);
    },
    [goTo]
  );

  return {
    filteredNewsList,
    activeCategory,
    handleClickMenuItem,
    handleClickCardItem,
  };
};
