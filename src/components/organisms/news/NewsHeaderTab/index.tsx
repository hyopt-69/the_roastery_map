import React from 'react';

import { Divider } from '@/components/atoms/Divider';
import { TertiaryButton } from '@/components/atoms/TertiaryButton';
import { ScrollWrapper } from '@/components/templates/ScrollWrapper';
import {
  NEWS_CATEGORY_LABEL,
  NEWS_CATEGORY_LIST,
} from '@/domains/news/constants';
import { NewsCategory } from '@/domains/news/types';

import { styles } from './styles';

type Props = {
  activeCategory: NewsCategory;
  onClickItem: (arg: NewsCategory) => void;
};

export const NewsHeaderTab: React.FC<Props> = ({
  activeCategory,
  onClickItem,
}) => {
  return (
    <nav css={styles.container}>
      <ScrollWrapper>
        {NEWS_CATEGORY_LIST.map((category) => (
          <>
            <TertiaryButton onClick={() => onClickItem(category)}>
              {NEWS_CATEGORY_LABEL[category]}
            </TertiaryButton>
            {activeCategory === category && (
              <Divider borderColor="mirage" borderWidth="l" />
            )}
          </>
        ))}
      </ScrollWrapper>
      <Divider borderColor="blackHaze" />
    </nav>
  );
};
