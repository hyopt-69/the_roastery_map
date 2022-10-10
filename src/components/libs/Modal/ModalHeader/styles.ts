import { css } from '@emotion/react';

import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';

export const styles = {
  container: css({
    display: 'flex',
  }),
  closeButton: css({
    all: 'unset',
    display: 'flex',
    cursor: 'pointer',

    svg: {
      transitionDuration: durations.s,
      ':hover': {
        fill: colors.mirage,
      },
    },
  }),
};
