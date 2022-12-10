import { css, CSSObject } from '@emotion/react';

import { durations } from '@/theme/durations';
import { opacities } from '@/theme/opacities';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  carouselSection: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    aspectRatio: '3/2',
    img: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  }),
  informationSection: css({
    display: 'flex',
    flexDirection: 'column',

    padding: `${spaces.xs}px ${spaces.s}px ${spaces.s}px`,
    gap: spaces.s,
  }),
  namesWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    gap: spaces.xxs,
  }),
};

export const getCarouselWrapperStyle = (isVisible: boolean) => {
  const baseStyle: CSSObject = {
    position: 'absolute',
    zIndex: 1,

    transitionDuration: durations.s,
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? opacities.full : opacities.none,
  };

  return {
    back: css({
      ...baseStyle,
      left: spaces.xs,
    }),
    next: css({
      ...baseStyle,
      right: spaces.xs,
    }),
  };
};
