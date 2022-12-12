import { css, CSSObject } from '@emotion/react';

import { colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { opacities } from '@/theme/opacities';
import { spaces } from '@/theme/spaces';
import { getOpacifyColor } from '@/utils/colors';

export const getStyles = () => {
  const buttonWrapperBaseStyle: CSSObject = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    transitionDuration: durations.s,
  };

  const getNextButtonWrapperStyle = (isVisible: boolean) =>
    css({
      ...buttonWrapperBaseStyle,
      visibility: isVisible ? 'visible' : 'hidden',
      opacity: isVisible ? opacities.full : opacities.none,

      background: `linear-gradient(to right,
        ${getOpacifyColor('white', 'l')}, ${colors.transparent})`,
      left: 0,
    });

  const getBackButtonWrapperStyle = (isVisible: boolean) =>
    css({
      ...buttonWrapperBaseStyle,
      visibility: isVisible ? 'visible' : 'hidden',
      opacity: isVisible ? opacities.full : opacities.none,

      background: `linear-gradient(to left,
        ${getOpacifyColor('white', 'l')}, ${colors.transparent})`,
      right: 0,
    });

  const container = css({
    position: 'relative',
    display: 'flex',
    height: 'fit-content',
  });

  const listWrapper = css({
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
  });

  return {
    container,
    listWrapper,
    getNextButtonWrapperStyle,
    getBackButtonWrapperStyle,
  };
};
