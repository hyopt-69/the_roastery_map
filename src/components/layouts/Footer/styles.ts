import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { spaces } from '@/app/theme/spaces';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTop: `solid ${colors.blackHaze} ${borderWidths.m}px`,
  }),
  innerContainer: css(
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: `${spaces.s}px ${spaces.m}px`,
      flexWrap: 'wrap-reverse',
      rowGap: spaces.s,
    },
    mediaQuery({
      justifyContent: ['center', 'space-between'],
    })
  ),
  navWrapper: css({
    display: 'flex',
    gap: spaces.s,

    'a:hover': {
      color: colors.mirage,
    },
  }),
};
