import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { spaces } from '@/app/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    padding: `0 ${spaces.s}px`,
    borderBottom: `solid ${colors.blackHaze} ${borderWidths.m}px`,
  }),

  detailBtn: css({
    all: 'unset',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',

    'svg:hover': {
      stroke: colors.mirage,
    },
  }),
};

export const getStyles = (isVisible: boolean) => {
  return {
    navWrapper: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: spaces.s,
      transitionDuration: durations.s,
      a: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateX(0)' : 'translateX(30%)',
        opacity: isVisible ? opacities.full : opacities.none,
        ':hover': {
          svg: {
            stroke: colors.mirage,
          },
        },
      },
    }),
  };
};
