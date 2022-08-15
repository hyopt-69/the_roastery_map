import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { spaces } from '@/app/theme/spaces';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

export const styles = {
  container: css(
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: colors.white,
      padding: `${spaces.s}px ${spaces.m}px`,
      borderTop: `solid ${colors.blackHaze} ${borderWidths.m}px`,
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
