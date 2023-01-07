import { useCallback, useState } from 'react';

import { News } from '@/domains/news/types';
import { getDummyArticleList } from '@/dummy/data/news';

export const useNewsMainPage = () => {
  const [activeCategory, setActiveCategory] =
    useState<Select<News['category']>>('UnSelect');

  // FIXME: 裏から取ってこれるようにする。
  const [newsList] = useState<News[]>(getDummyArticleList(10));

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
    activeCategory,
    newsList,
    handleClickMenuItem,
    handleClickCardItem,
  };
};
