import React from 'react';

import { NewsCard } from '@/components/organisms/news/NewsCard';
import { NewsHeaderTab } from '@/components/organisms/news/NewsHeaderTab';
import { BasicLayout } from '@/components/templates/BasicLayout';
import { getDummyArticleList } from '@/dummy/data/news';

import { styles } from './styles';

type Props = React.ComponentProps<typeof NewsHeaderTab>;

export const DesktopLayout: React.FC<Props> = ({
  activeCategory,
  onClickItem,
}) => {
  return (
    <BasicLayout currentPath="NEWS">
      <NewsHeaderTab
        activeCategory={activeCategory}
        onClickItem={onClickItem}
      />
      <main css={styles.container}>
        <section css={styles.a}>
          {getDummyArticleList(10).map((item) => {
            return (
              <NewsCard
                {...item}
                authorInfo={{ name: 'okayama', src: '' }}
                onClick={() => {}}
              />
            );
          })}
        </section>
      </main>
    </BasicLayout>
  );
};
