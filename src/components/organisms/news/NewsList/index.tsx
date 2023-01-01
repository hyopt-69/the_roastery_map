import React from 'react';

import { Divider } from '@/components/atoms/Divider';
import { News } from '@/domains/news/types';
import { useResponsive } from '@/hooks/useResponsive';
import { getIsSameMonth, getFormatDate } from '@/utils/date';

import { styles } from './styles';

import { NewsCard } from '../NewsCard';

type Props = {
  newsList: News[];
  onClickCardItem: (id: News['id']) => void;
};

export const NewsList: React.FC<Props> = ({ newsList, onClickCardItem }) => {
  const { isMobile } = useResponsive();

  return (
    <div css={styles.container}>
      {newsList.map((news, i) => {
        const nextNews = newsList[i + 1];

        const isSameMonth =
          nextNews &&
          getIsSameMonth({
            targetDate: new Date(news.createdAt),
            baseDate: new Date(nextNews.createdAt),
          });

        return (
          <>
            <NewsCard {...news} onClick={() => onClickCardItem(news.id)} />
            {nextNews && !isSameMonth && (
              <Divider
                labelSize={isMobile ? 'xxxs' : 'xxs'}
                label={getFormatDate({
                  date: new Date(nextNews.createdAt),
                  format: 'yyyy.MM',
                })}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
