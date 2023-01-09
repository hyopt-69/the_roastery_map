import React from 'react';

import { News } from '@/domains/news/types';
import { useResponsive } from '@/hooks/useResponsive';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';
import { useNewsMainPage } from './hooks';

type Props = {
  newsList: News[];
};
export const NewsMainPage: React.FC<Props> = ({ newsList }) => {
  const { isMobile } = useResponsive();
  const {
    filteredNewsList,
    activeCategory,
    handleClickMenuItem,
    handleClickCardItem,
  } = useNewsMainPage(newsList);

  if (isMobile) {
    return (
      <MobileLayout
        newsList={filteredNewsList}
        activeCategory={activeCategory}
        onClickMenuItem={handleClickMenuItem}
        onClickCardItem={handleClickCardItem}
      />
    );
  }
  return (
    <DesktopLayout
      newsList={filteredNewsList}
      activeCategory={activeCategory}
      onClickMenuItem={handleClickMenuItem}
      onClickCardItem={handleClickCardItem}
    />
  );
};
