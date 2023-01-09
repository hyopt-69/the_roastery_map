import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { NewsDetailPage } from '@/components/pages/news/NewsDetailPage';
import { fetchNewsDetail, fetchNewsList } from '@/libs/microcms/api/news';

type Props = React.ComponentProps<typeof NewsDetailPage>;
type Params = ParsedUrlQuery & {
  id: Props['news']['newsID'];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const newsList = await fetchNewsList();
  const paths = newsList.map(({ newsID }) => ({
    params: { id: newsID },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const news = await fetchNewsDetail(params!.id);

  return {
    props: { news },
  };
};

const NewsDetail: React.FC<Props> = ({ news }) => {
  return <NewsDetailPage news={news} />;
};

export default NewsDetail;
