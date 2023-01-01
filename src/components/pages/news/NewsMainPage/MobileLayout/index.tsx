import React from 'react';

import { Body } from '@/components/atoms/Body';
import { Divider } from '@/components/atoms/Divider';
import { Title } from '@/components/atoms/Title';
import { NewsHeaderTab } from '@/components/organisms/news/NewsHeaderTab';
import { NewsList } from '@/components/organisms/news/NewsList';
import { BasicLayout } from '@/components/templates/BasicLayout';

import { styles } from './styles';

type Props = React.ComponentProps<typeof NewsHeaderTab> &
  React.ComponentProps<typeof NewsList>;

export const MobileLayout: React.FC<Props> = ({
  newsList,
  activeCategory,
  onClickTabItem,
  onClickCardItem,
}) => {
  return (
    <BasicLayout currentPath="NEWS">
      <main css={styles.container}>
        <div css={styles.tabWrapper}>
          <NewsHeaderTab
            activeCategory={activeCategory}
            onClickTabItem={onClickTabItem}
          />
        </div>
        {/* FIXME:この辺ちゃんと実装する。 */}
        <section css={styles.categoryLabelWrapper}>
          {/* <Title size="m">{NEWS_CATEGORY_LABEL[activeCategory]}</Title> */}
          <Title size="m">All Posts</Title>
          <Body size="xxxs" color="pumice">
            すべての投稿
          </Body>
        </section>
        <section css={styles.contentWrapper}>
          <NewsList newsList={newsList} onClickCardItem={onClickCardItem} />
        </section>
      </main>
    </BasicLayout>
  );
};
