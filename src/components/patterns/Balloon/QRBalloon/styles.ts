import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
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
        color: colors.black,
      },
    },
  }),
  // FIXME : dividerコンポーネントに置き換える。
  divider: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: 10,
    '::before, ::after': {
      content: `""`,
      flexGrow: 1,
      height: borderWidths.m,
      borderRadius: borderWidths.m / 2,
      backgroundColor: colors.pumice,
    },
  }),
  qrWrapper: css({
    width: 100,
    padding: spaces.xxs,
    aspectRatio: '1/1',
  }),
};
