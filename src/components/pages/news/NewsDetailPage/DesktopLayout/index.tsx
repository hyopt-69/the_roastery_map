import React from 'react';

import { Title } from '@/components/atoms/Title';
import { BasicLayout } from '@/components/templates/BasicLayout';
import { HtmlParser } from '@/components/templates/HtmlParser';
import { News } from '@/domains/news/types';

import { styles } from './styles';

type Props = {
  news: News;
};

// TODO: rom-156-newsdetailpageのuiを実装する。
export const DesktopLayout: React.FC<Props> = ({ news }) => {
  return (
    <BasicLayout currentPath="NEWS">
      <main css={styles.container}>
        <div css={styles.contentWrapper}>
          <Title Tag="h1" size="xl">
            {news.title}
          </Title>
          <HtmlParser html={news.article} />
        </div>
      </main>
    </BasicLayout>
  );
};
