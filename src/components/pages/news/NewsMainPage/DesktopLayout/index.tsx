import React from 'react';

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
      <NewsHeaderTab
        activeCategory={activeCategory}
        onClickTabItem={onClickTabItem}
      />
      <main css={styles.container}>
        <section css={styles.contentWrapper}>
          <NewsList newsList={newsList} onClickCardItem={onClickCardItem} />
        </section>
      </main>
    </BasicLayout>
  );
};
