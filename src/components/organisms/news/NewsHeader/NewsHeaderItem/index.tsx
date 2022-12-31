import React from 'react';

import { Label } from '@/components/atoms/Label';
import { TertiaryButton } from '@/components/atoms/TertiaryButton';
import { NEWS_CATEGORY_LABEL } from '@/domains/news/constants';
import { NewsCategory } from '@/domains/news/types';

import { styles } from './styles';

type Props = {
  pattern: NewsCategory;
  onClick: (arg: NewsCategory) => void;
};

export const NewsHeaderItem: React.FC<Props> = ({ pattern, onClick }) => {
  return (
    <TertiaryButton onClick={() => onClick(pattern)}>
      {NEWS_CATEGORY_LABEL[pattern]}
    </TertiaryButton>
    // <div role="none" onClick={() => onClick(pattern)} css={styles.container}>
    //   <Label weight="normal" size="s" maxLine={1}>
    //     {NEWS_CATEGORY_LABEL[pattern]}
    //   </Label>
    // </div>
  );
};
