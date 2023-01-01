import React from 'react';

import { Body } from '@/components/atoms/Body';
import { Title } from '@/components/atoms/Title';
import { NewsCategory } from '@/domains/news/types';
import { useResponsive } from '@/hooks/useResponsive';

import { styles } from './styles';

const DESCRIPTION_DETAIL: Record<
  NewsCategory,
  { title: string; body: string }
> = {
  All: { title: 'All Posts', body: 'すべての投稿' },
  Event: { title: 'Events', body: 'コーヒーに関するイベントの情報' },
  Other: { title: 'Others', body: 'その他のいろいろなお知らせ' },
  Recipe: { title: 'Brew Recipes', body: 'おすすめの抽出レシピの紹介' },
  Report: { title: 'Shop Reports', body: 'おすすめのコーヒーショップの紹介' },
};

type Props = {
  pattern: NewsCategory;
};

export const NewsCategoryDescription: React.FC<Props> = ({ pattern }) => {
  const { isMobile } = useResponsive();
  const { title, body } = DESCRIPTION_DETAIL[pattern];

  return (
    <div css={styles.container}>
      <Title Tag="h1" size={isMobile ? 'm' : 'l'}>
        {title}
      </Title>
      <Body size={isMobile ? 'xxxs' : 'xxs'} color="pumice">
        {body}
      </Body>
    </div>
  );
};
