import React from 'react';

import { useResponsive } from '@/hooks/useResponsive';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';
import { useNewsMainPage } from './hooks';

export const NewsMainPage: React.FC = () => {
  const { activeCategory, handleClickHeaderItem } = useNewsMainPage();
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <MobileLayout
        activeCategory={activeCategory}
        onClickItem={handleClickHeaderItem}
      />
    );
  }
  return (
    <DesktopLayout
      activeCategory={activeCategory}
      onClickItem={handleClickHeaderItem}
    />
  );
};
