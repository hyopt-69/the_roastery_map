import { css } from '@emotion/react';

import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { spaces } from '@/app/theme/spaces';
import { getHorizontalSpace } from '@/app/utils/spaces';

export const styles = {
  header: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: getHorizontalSpace(spaces.xl),
    ':after': {
      content: '""',
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
    position: 'relative',
    height: 500,
    width: '100%',
  }),
};

export const imageStyle = (isVisible: boolean) =>
  css({
    position: 'absolute',
    objectFit: 'contain',
    height: '100%',
    width: '100%',

    transitionDuration: durations.m,
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? opacities.full : opacities.none,
  });

export const getButtonWrapperStyle = (isVisible: boolean) =>
  css({
    padding: `0 ${spaces.s}px`,
    transitionDuration: durations.s,
    opacity: isVisible ? opacities.full : opacities.none,
    visibility: isVisible ? 'visible' : 'hidden',
  });
