import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { spaces } from '@/app/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    padding: `0 ${spaces.m}px`,
    borderBottom: `solid ${colors.blackHaze} ${borderWidths.m}px`,
  }),
  navWrapper: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spaces.s,
  }),
};
