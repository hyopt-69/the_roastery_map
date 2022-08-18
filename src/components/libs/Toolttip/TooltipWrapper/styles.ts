import { css } from '@emotion/react';

import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';

type RevealFrom = 'bottom' | 'top' | 'center';

export type StyleProps = {
  isVisible: boolean;
  revealFrom?: RevealFrom;
};

const REVEAL_OFFSET: Record<RevealFrom, number> = {
  bottom: 5,
  top: -5,
  center: 0,
};

export const getStyles = ({ isVisible, revealFrom = 'center' }: StyleProps) => {
  return css({
    width: 'fit-content',
    height: 'fit-content',

    transitionDuration: durations.s,
    transform: isVisible
      ? 'translateY(0)'
      : `translateY(${REVEAL_OFFSET[revealFrom]}%)`,
    opacity: isVisible ? opacities.full : opacities.none,
    visibility: isVisible ? 'visible' : 'hidden',
  });
};
