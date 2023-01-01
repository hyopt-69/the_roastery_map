import React from 'react';

import { useResponsive } from '@/hooks/useResponsive';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';
import { useNewsMainPage } from './hooks';

export const NewsMainPage: React.FC = () => {
  const { isMobile } = useResponsive();
  const { newsList, activeCategory, handleClickMenuItem, handleClickCardItem } =
    useNewsMainPage();

  if (isMobile) {
    return (
      <MobileLayout
        newsList={newsList}
        activeCategory={activeCategory}
        onClickMenuItem={handleClickMenuItem}
        onClickCardItem={handleClickCardItem}
      />
    );
  }
  return (
    <DesktopLayout
      newsList={newsList}
      activeCategory={activeCategory}
      onClickMenuItem={handleClickMenuItem}
      onClickCardItem={handleClickCardItem}
    />
  );
};
