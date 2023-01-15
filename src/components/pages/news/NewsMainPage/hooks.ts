import { useCallback, useMemo, useState } from 'react';

import { News } from '@/domains/news/types';
import { useAppRouter } from '@/hooks/useAppRouter';

const INITIAL_DISPLAY_LENGTH = 5;

export const useNewsMainPage = (newsList: News[]) => {
  const { goTo } = useAppRouter();
  const [displayLength, setDisplayLength] = useState(INITIAL_DISPLAY_LENGTH);
  const [activeCategory, setActiveCategory] =
    useState<Select<News['category']>>('UnSelect');

  const filteredNewsList = useMemo(() => {
    const categorizedList =
      activeCategory === 'UnSelect'
        ? newsList
        : newsList.filter(({ category }) => category === activeCategory);

    // TODO: タイトル検索機能を実装
    const searchedList = categorizedList;

    return searchedList;
  }, [activeCategory, newsList]);

  // 画面に表示されているNewsのリスト
  const displayNewsList = useMemo(() => {
    return filteredNewsList.slice(0, displayLength);
  }, [filteredNewsList, displayLength]);

  const isVisibleDisplayMoreButton = useMemo(() => {
    return displayLength < filteredNewsList.length;
  }, [filteredNewsList.length, displayLength]);

  const handleResetFilter = useCallback(() => {
    setActiveCategory('UnSelect');
    setDisplayLength(INITIAL_DISPLAY_LENGTH);
  }, []);

  const handleClickMenuItem = useCallback((category: typeof activeCategory) => {
    setActiveCategory(category);
  }, []);

  const handleClickCardItem = useCallback(
    (id: News['newsID']) => {
      goTo('NEWS', id);
    },
    [goTo]
  );

  const handleClickDisplayMore = useCallback(() => {
    setDisplayLength((pre) => pre + INITIAL_DISPLAY_LENGTH);
  }, []);

  return {
    displayNewsList,
    activeCategory,
    isVisibleDisplayMoreButton,
    handleResetFilter,
    handleClickDisplayMore,
    handleClickMenuItem,
    handleClickCardItem,
  };
};
