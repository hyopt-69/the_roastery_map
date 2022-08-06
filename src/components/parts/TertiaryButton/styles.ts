import { css } from '@emotion/react';

import { colors } from '@/app/theme/colors';
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
        backgroundColor: colors.gallery,
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
