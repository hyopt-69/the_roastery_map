import React from 'react';

import { Body } from '@/components/atoms/Body';
import { Title } from '@/components/atoms/Title';
import {
  NEWS_CATEGORY_DESCRIPTION,
  NEWS_CATEGORY_LABEL,
} from '@/domains/news/constants';
import { News } from '@/domains/news/types';
import { useResponsive } from '@/hooks/useResponsive';

import { styles } from './styles';

type Props = {
  pattern: SelectableAll<News['category']>;
};

export const NewsCategoryDescription: React.FC<Props> = ({ pattern }) => {
  const { isMobile } = useResponsive();

  return (
    <div css={styles.container}>
      <Title Tag="h1" size={isMobile ? 'm' : 'l'}>
        {NEWS_CATEGORY_LABEL[pattern]}
      </Title>
      <Body size={isMobile ? 'xxxs' : 'xxs'} color="pumice">
        {NEWS_CATEGORY_DESCRIPTION[pattern]}
      </Body>
    </div>
  );
};
