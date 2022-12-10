import { css } from '@emotion/react';

import { borderWidths } from '@/theme/borderWidths';
import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderBottom: `solid ${colors.blackHaze} ${borderWidths.m}px`,
  }),
  innerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: `0 ${spaces.m}px`,
  }),
  navWrapper: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spaces.s,

    'a:hover': {
      color: colors.mirage,
    },
  }),
};
