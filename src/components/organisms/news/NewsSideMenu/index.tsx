import React from 'react';

import { Label } from '@/components/atoms/Label';
import {
  NEWS_CATEGORY_LABEL,
  NEWS_CATEGORY_LIST,
} from '@/domains/news/constants';
import { News } from '@/domains/news/types';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

type Props = {
  activeCategory: Select<News['category']>;
  onClickMenuItem: (arg: Select<News['category']>) => void;
};

const DEFAULT_COLOR: Color = 'tapa';
export const NewsSideMenu: React.FC<Props> = ({
  activeCategory,
  onClickMenuItem,
}) => {
  const { container, menuWrapper, menuItem } = getStyles();

  return (
    <nav css={container}>
      <div css={menuWrapper}>
        {NEWS_CATEGORY_LIST.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              type="button"
              css={menuItem(isActive)}
              disabled={isActive}
              onClick={() => onClickMenuItem(category)}
            >
              <Label size="xs" color={DEFAULT_COLOR} maxLine={1}>
                {NEWS_CATEGORY_LABEL[category]}
              </Label>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
