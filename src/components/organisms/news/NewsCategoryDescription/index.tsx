import React from 'react';

import { Body } from '@/components/atoms/Body';
import { Title } from '@/components/atoms/Title';
import { NEWS_CATEGORY_LABEL } from '@/domains/news/constants';
import { NewsCategory } from '@/domains/news/types';
import { useResponsive } from '@/hooks/useResponsive';

import { styles } from './styles';

const NEWS_CATEGORY_DESCRIPTION: Record<NewsCategory, string> = {
  All: 'すべての投稿',
  Event: 'コーヒーに関するイベントの情報',
  Other: 'その他のいろいろなお知らせ',
  Recipe: 'おすすめの抽出レシピの紹介',
  Report: 'おすすめのコーヒーショップの紹介',
};

type Props = {
  pattern: NewsCategory;
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
