import React from 'react';

import { NewsCategoryDescription } from '@/components/organisms/news/NewsCategoryDescription';
import { NewsHeaderMenu } from '@/components/organisms/news/NewsHeaderMenu';
import { NewsList } from '@/components/organisms/news/NewsList';
import { NewsListEmptyContent } from '@/components/organisms/news/NewsListEmptyContent';
import { BasicLayout } from '@/components/templates/BasicLayout';

import { styles } from './styles';

type Props = React.ComponentProps<typeof NewsHeaderMenu> &
  React.ComponentProps<typeof NewsList>;

export const MobileLayout: React.FC<Props> = ({
  newsList,
  activeCategory,
  onClickMenuItem,
  onClickCardItem,
}) => {
  return (
    <BasicLayout currentPath="NEWS">
      <main css={styles.container}>
        <div css={styles.tabWrapper}>
          <NewsHeaderMenu
            activeCategory={activeCategory}
            onClickMenuItem={onClickMenuItem}
          />
        </div>
        <NewsCategoryDescription pattern={activeCategory} />
        <section css={styles.contentWrapper}>
          {newsList.length ? (
            <NewsList newsList={newsList} onClickCardItem={onClickCardItem} />
          ) : (
            <NewsListEmptyContent />
          )}
        </section>
      </main>
    </BasicLayout>
  );
};
