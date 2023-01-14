import React from 'react';

import { MediaQueryElement } from '@/components/templates/MediaQueryElement';
import { News } from '@/domains/news/types';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

type Props = {
  news: News;
};

export const NewsDetailPage: React.FC<Props> = ({ news }) => {
  return (
    <MediaQueryElement
      mobile={<MobileLayout news={news} />}
      desktop={<DesktopLayout news={news} />}
    />
  );
};
