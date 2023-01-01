import React from 'react';

import { NewsCategoryDescription } from '@/components/organisms/news/NewsCategoryDescription';
import { NewsHeaderTab } from '@/components/organisms/news/NewsHeaderTab';
import { NewsList } from '@/components/organisms/news/NewsList';
import { BasicLayout } from '@/components/templates/BasicLayout';

import { styles } from './styles';

type Props = React.ComponentProps<typeof NewsHeaderTab> &
  React.ComponentProps<typeof NewsList>;

export const DesktopLayout: React.FC<Props> = ({
  newsList,
  activeCategory,
  onClickTabItem,
  onClickCardItem,
}) => {
  return (
    <BasicLayout currentPath="NEWS">
      <main css={styles.container}>
        <div css={styles.innerContainer}>
          <section css={styles.sideNavigationWrapper} />
          <div css={styles.rightContentsWrapper}>
            <NewsCategoryDescription pattern={activeCategory} />
            <section css={styles.contentWrapper}>
              <NewsList newsList={newsList} onClickCardItem={onClickCardItem} />
            </section>
          </div>
        </div>
      </main>
    </BasicLayout>
  );
};
