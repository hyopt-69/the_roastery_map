import React from 'react';

import { News } from '@/domains/news/types';

import { styles } from './styles';

type Props = {
  news: News;
};

export const NewsDetailPage: React.FC<Props> = ({ news }) => {
  return (
    <div css={styles.container}>
      <p>{news.newsID}</p>
      <p>{news.title}</p>
      <p>{news.article}</p>
    </div>
  );
};
