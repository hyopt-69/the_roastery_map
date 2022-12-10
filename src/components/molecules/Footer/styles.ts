import { css } from '@emotion/react';

import { borderWidths } from '@/theme/borderWidths';
import { colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { opacities } from '@/theme/opacities';
import { spaces } from '@/theme/spaces';
import { mediaQuery } from '@/utils/responsive';

export const getBalloonStyle = (isVisible: boolean) =>
  css({
    position: 'absolute',
    bottom: '100%',
    right: '50%',

    transitionDuration: durations.s,
    visibility: isVisible ? 'visible' : 'hidden',
    translate: isVisible ? `50% 0` : `50% ${spaces.s}px`,
    opacity: isVisible ? opacities.full : opacities.none,
  });

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
      rowGap: spaces.xs,
    },
    mediaQuery({
      flexDirection: ['column-reverse', 'row'],
      justifyContent: ['center', 'space-between'],
    })
  ),
  buttonWrapper: css({
    position: 'relative',
  }),
  linksWrapper: css(
    {
      display: 'flex',
      flexDirection: 'column',
      rowGap: spaces.xxs,
    },
    mediaQuery({
      textAlign: ['center', 'right'],
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
