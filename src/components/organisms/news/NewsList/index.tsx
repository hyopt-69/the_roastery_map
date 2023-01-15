import React from 'react';

import { Divider } from '@/components/atoms/Divider';
import { TertiaryButton } from '@/components/atoms/TertiaryButton';
import { News } from '@/domains/news/types';
import { getIsSameMonth, getFormatDate } from '@/utils/date';

import { styles } from './styles';

import { NewsCard } from '../NewsCard';

type Props = {
  newsList: News[];
  isVisibleDisplayMoreButton: boolean;
  onClickCardItem: (id: News['newsID']) => void;
  onClickDisplayMoreButton: () => void;
};

export const NewsList: React.FC<Props> = ({
  newsList,
  isVisibleDisplayMoreButton,
  onClickCardItem,
  onClickDisplayMoreButton,
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.newsWrapper}>
        {newsList.map((news, i) => {
          const nextNews = newsList[i + 1];

          const isSameMonth =
            nextNews &&
            getIsSameMonth({
              targetDate: new Date(news.createdAt),
              baseDate: new Date(nextNews.createdAt),
            });

          return (
            <React.Fragment key={news.newsID}>
              <NewsCard
                onClick={() => onClickCardItem(news.newsID)}
                {...news}
              />
              {nextNews && !isSameMonth && (
                <Divider
                  labelSize="xxs"
                  label={getFormatDate({
                    date: new Date(nextNews.createdAt),
                    format: 'yyyy.MM',
                  })}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {isVisibleDisplayMoreButton && (
        <TertiaryButton onClick={onClickDisplayMoreButton} isOutlined size="l">
          もっとみる
        </TertiaryButton>
      )}
    </div>
  );
};
