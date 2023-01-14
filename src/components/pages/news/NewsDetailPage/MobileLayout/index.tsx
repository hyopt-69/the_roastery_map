import React from 'react';

import { BasicLayout } from '@/components/templates/BasicLayout';
import { News } from '@/domains/news/types';

import { styles } from './styles';

type Props = {
  news: News;
};

export const MobileLayout: React.FC<Props> = ({ news }) => {
  return (
    <BasicLayout currentPath="NEWS">
      <p>Mobile</p>
    </BasicLayout>
  );
};
