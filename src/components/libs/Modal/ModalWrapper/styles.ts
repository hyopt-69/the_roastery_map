import { css } from '@emotion/react';

import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { zIndexes } from '@/app/theme/zIndexes';
import { getOpacifyColor } from '@/app/utils/colors';

export const getStyles = (isVisible: boolean) => ({
  background: css({
    position: 'absolute',
    inset: 0,
    zIndex: zIndexes.modal,
    width: '100%',
    height: '100%',
    backgroundColor: getOpacifyColor('black', 's'),
    backdropFilter: 'blur(1.5px)',

    transitionDuration: durations.s,
    transitionProperty: 'opacity, visibility',
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? opacities.full : opacities.none,
  }),
  content: css({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',

    transitionDuration: durations.s,
    top: isVisible ? '50%' : '100%',
    opacity: isVisible ? opacities.full : opacities.none,
  }),
});
