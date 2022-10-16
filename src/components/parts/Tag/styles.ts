import { css } from '@emotion/react';

import { Color, colors } from '@/app/theme/colors';
import { scales } from '@/app/theme/scales';
import { spaces } from '@/app/theme/spaces';

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
      padding: `0 ${spaces.xs}px`,
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
