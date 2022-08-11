import { css } from '@emotion/react';

import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { scales } from '@/app/theme/scales';
import { spaces } from '@/app/theme/spaces';

const BUTTON_HEIGHT = 36;

export const styles = {
  container: css({
    all: 'unset',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    paddingLeft: spaces.s,
    paddingRight: spaces.s,
    backgroundColor: colors.transparent,

    ':enabled': {
      cursor: 'pointer',
      ':hover': {
        transitionDuration: durations.s,
        backgroundColor: colors.gallery,
      },
      ':active': {
        transform: scales.s,
      },
    },

    ':disabled': {
      cursor: 'not-allowed',
    },
  }),
  innerWrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces.xs,
  }),
};
