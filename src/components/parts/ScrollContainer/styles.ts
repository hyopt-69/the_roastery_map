import { css, CSSObject } from '@emotion/react';

import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { spaces } from '@/app/theme/spaces';
import { getOpacifyColor } from '@/app/utils/colors';

export const styles = {
  container: css({
    position: 'relative',
    display: 'flex',
    height: 'fit-content',
  }),
  listWrapper: css({
    all: 'unset',
    display: 'flex',
    overflowX: 'scroll',
    gap: spaces.xs,

    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },

    li: {
      all: 'unset',
    },
  }),
};

export const getButtonWrapperStyle = (isVisible: boolean) => {
  const baseStyle: CSSObject = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    transitionDuration: durations.s,
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? opacities.full : opacities.none,
  };

  return {
    backButtonWrapper: css({
      ...baseStyle,
      background: `linear-gradient(to right,
        ${getOpacifyColor('white', 'l')}, ${colors.transparent})`,
      left: 0,
    }),
    nextButtonWrapper: css({
      ...baseStyle,
      background: `linear-gradient(to left,
        ${getOpacifyColor('white', 'l')}, ${colors.transparent})`,
      right: 0,
    }),
  };
};
