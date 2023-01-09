import { GetStaticProps } from 'next';
import React from 'react';

import { NewsMainPage } from '@/components/pages/news/NewsMainPage';
import { fetchNewsList } from '@/libs/microcms/api/news';

type Props = React.ComponentProps<typeof NewsMainPage>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsList = await fetchNewsList();

  return {
    props: { newsList },
  };
};

const NewsMain: React.FC<Props> = ({ newsList }) => {
  return <NewsMainPage newsList={newsList} />;
};

export default NewsMain;
