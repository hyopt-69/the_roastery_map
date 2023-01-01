import React from 'react';

import { NewsCategoryDescription } from '@/components/organisms/news/NewsCategoryDescription';
import { NewsList } from '@/components/organisms/news/NewsList';
import { NewsSideMenu } from '@/components/organisms/news/NewsSideMenu';
import { BasicLayout } from '@/components/templates/BasicLayout';

import { styles } from './styles';

type Props = React.ComponentProps<typeof NewsSideMenu> &
  React.ComponentProps<typeof NewsList>;

export const DesktopLayout: React.FC<Props> = ({
  newsList,
  activeCategory,
  onClickMenuItem,
  onClickCardItem,
}) => {
  return (
    <BasicLayout currentPath="NEWS">
      <main css={styles.container}>
        <div css={styles.innerContainer}>
          <section css={styles.sideNavigationWrapper}>
            <NewsSideMenu
              activeCategory={activeCategory}
              onClickMenuItem={onClickMenuItem}
            />
          </section>
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
