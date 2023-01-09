import React from 'react';

import { MediaQueryElement } from '@/components/templates/MediaQueryElement';
import { News } from '@/domains/news/types';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';
import { useNewsMainPage } from './hooks';

type Props = {
  newsList: News[];
};
export const NewsMainPage: React.FC<Props> = ({ newsList }) => {
  const {
    filteredNewsList,
    activeCategory,
    handleClickMenuItem,
    handleClickCardItem,
  } = useNewsMainPage(newsList);

  return (
    <MediaQueryElement
      mobile={
        <MobileLayout
          newsList={filteredNewsList}
          activeCategory={activeCategory}
          onClickMenuItem={handleClickMenuItem}
          onClickCardItem={handleClickCardItem}
        />
      }
      desktop={
        <DesktopLayout
          newsList={filteredNewsList}
          activeCategory={activeCategory}
          onClickMenuItem={handleClickMenuItem}
          onClickCardItem={handleClickCardItem}
        />
      }
    />
  );
};
