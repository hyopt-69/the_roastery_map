import { css } from '@emotion/react';

import { Color, colors } from '@/theme/colors';
import { scales } from '@/theme/scales';
import { spaces } from '@/theme/spaces';

const HEIGHT = 24;
type StyleProps = {
  bgColor: Color;
};
export const getStyles = ({ bgColor }: StyleProps) => {
  return {
    container: css({
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
      paddingInline: spaces.xs,
      width: 'fit-content',
      height: HEIGHT,
      borderRadius: HEIGHT / 2,
      backgroundColor: colors[bgColor],
      whiteSpace: 'nowrap',
      ':enabled': {
        cursor: 'pointer',
        ':active': {
          transform: scales.smaller,
        },
      },
    }),
  };
};
