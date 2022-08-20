import { css } from '@emotion/react';

import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { spaces } from '@/app/theme/spaces';

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
