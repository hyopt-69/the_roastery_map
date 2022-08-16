import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  itemLength: number;
  activeIndex: number;
  handleClickItem?: (index: number) => void;
} & StyleProps;

export const CarouselIndicator: React.FC<Props> = ({
  activeIndex,
  itemLength,
  handleClickItem,
  ...styleProps
}) => {
  return (
    <div css={getStyles(styleProps)}>
      {[...new Array(itemLength)].map((_, i) => (
        <input
          key={i}
          type="radio"
          checked={activeIndex === i}
          onClick={() => handleClickItem?.(i)}
          disabled={!handleClickItem}
        />
      ))}
    </div>
  );
};
