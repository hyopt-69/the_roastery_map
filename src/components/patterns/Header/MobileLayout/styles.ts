import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { spaces } from '@/app/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderBottom: `solid ${colors.blackHaze} ${borderWidths.m}px`,
  }),
  innerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    padding: `0 ${spaces.s}px`,
  }),

  detailBtn: css({
    all: 'unset',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',

    'svg:hover': {
      fill: colors.mirage,
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
      a: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        transitionDuration: durations.s,

        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateX(0)' : 'translateX(20%)',
        opacity: isVisible ? opacities.full : opacities.none,
        ':hover': {
          svg: {
            fill: colors.mirage,
          },
        },
      },
    }),
  };
};
