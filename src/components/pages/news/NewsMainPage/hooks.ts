import { useCallback, useMemo, useState } from 'react';

import { News } from '@/domains/news/types';

export const useNewsMainPage = (newsList: News[]) => {
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

  const handleClickCardItem = useCallback((id: News['newsID']) => {
    // FIXME: 詳細ページへの遷移を実装する。
    console.log(id);
  }, []);

  return {
    filteredNewsList,
    activeCategory,
    handleClickMenuItem,
    handleClickCardItem,
  };
};
