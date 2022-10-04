import { css } from '@emotion/react';

import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { spaces } from '@/app/theme/spaces';

export const styles = {
  header: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: spaces.s,
    svg: {
      position: 'absolute',
      cursor: 'pointer',
      left: spaces.s,
    },
  }),
  imageSection: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  }),
  imageWrapper: css({
    height: 500,
    width: '90%',
    img: {
      objectFit: 'contain',
      height: '100%',
      width: '100%',
    },
  }),
};

export const getButtonWrapperStyle = (isVisible: boolean) =>
  css({
    padding: `0 ${spaces.s}px`,
    transitionDuration: durations.s,
    opacity: isVisible ? opacities.full : opacities.none,
    visibility: isVisible ? 'visible' : 'hidden',
  });
