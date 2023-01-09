import React from 'react';

import { Divider } from '@/components/atoms/Divider';
import { TertiaryButton } from '@/components/atoms/TertiaryButton';
import { ScrollWrapper } from '@/components/templates/ScrollWrapper';
import {
  NEWS_CATEGORY_LABEL,
  NEWS_CATEGORY_LIST,
} from '@/domains/news/constants';
import { News } from '@/domains/news/types';

import { styles } from './styles';

type Props = {
  activeCategory: Select<News['category']>;
  onClickMenuItem: (arg: Select<News['category']>) => void;
};

export const NewsHeaderMenu: React.FC<Props> = ({
  activeCategory,
  onClickMenuItem,
}) => {
  return (
    <nav css={styles.container}>
      <ScrollWrapper>
        {NEWS_CATEGORY_LIST.map((category) => (
          <React.Fragment key={category}>
            <TertiaryButton onClick={() => onClickMenuItem(category)}>
              {NEWS_CATEGORY_LABEL[category]}
            </TertiaryButton>
            {activeCategory === category && (
              <Divider borderColor="mirage" borderWidth="l" />
            )}
          </React.Fragment>
        ))}
      </ScrollWrapper>
      <Divider borderColor="blackHaze" />
    </nav>
  );
};
