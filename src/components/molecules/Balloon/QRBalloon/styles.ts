import { css } from '@emotion/react';

import { colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spaces.s,
    gap: spaces.xs,
    a: {
      transitionDuration: durations.s,
      ':hover': {
        color: colors.mirage,
      },
    },
  }),
  qrWrapper: css({
    width: 100,
    padding: spaces.xxs,
    aspectRatio: '1/1',
  }),
};
