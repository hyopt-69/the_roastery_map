import React from 'react';

import { NewsCategoryDescription } from '@/components/organisms/news/NewsCategoryDescription';
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
        <NewsCategoryDescription pattern={activeCategory} />
        <section css={styles.contentWrapper}>
          <NewsList newsList={newsList} onClickCardItem={onClickCardItem} />
        </section>
      </main>
    </BasicLayout>
  );
};
