import { css } from '@emotion/react';

import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { spaces } from '@/app/theme/spaces';

export type StyleProps = {
  indicatorSize?: number;
};

export const getStyles = ({ indicatorSize = 8 }: StyleProps) =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: spaces.xxs,

    input: {
      all: 'unset',

      width: indicatorSize,
      height: indicatorSize,
      borderRadius: indicatorSize / 2,
      transitionDuration: durations.s,

      ':checked': {
        backgroundColor: colors.white,
        cursor: 'default',
      },
      ':not(:checked)': {
        backgroundColor: colors.pumice,

        ':enabled': {
          cursor: 'pointer',
        },
      },
    },
  });
