import { css } from '@emotion/react';

import { durations } from '@/theme/durations';
import { opacities } from '@/theme/opacities';
import { spaces } from '@/theme/spaces';
import { zIndexes } from '@/theme/zIndexes';
import { getOpacifyColor } from '@/utils/colors';

type BackgroundMode = 'dark' | 'light';

const BACKGROUND_STYLE: Record<BackgroundMode, string> = {
  dark: getOpacifyColor('black', 'l'),
  light: getOpacifyColor('black', 's'),
};
export type StyleProps = {
  isVisible: boolean;
  backgroundMode?: BackgroundMode;
};
export const getStyles = ({
  isVisible,
  backgroundMode = 'light',
}: StyleProps) => {
  const background = css({
    position: 'absolute',
    inset: 0,
    zIndex: zIndexes.modal,
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND_STYLE[backgroundMode],
    backdropFilter: 'blur(1.5px)',

    transitionDuration: durations.s,
    transitionProperty: 'opacity, visibility',
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? opacities.full : opacities.none,
  });

  const header = css({
    position: 'absolute',
    width: '100%',
    top: spaces.xl,

    transitionDuration: durations.s,
    opacity: isVisible ? opacities.full : opacities.none,
  });

  const content = css({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',

    transitionDuration: durations.s,
    top: isVisible ? '50%' : '100%',
    opacity: isVisible ? opacities.full : opacities.none,
  });

  return {
    background,
    header,
    content,
  };
};
