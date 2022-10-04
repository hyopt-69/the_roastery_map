import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { scales } from '@/app/theme/scales';
import { shadows } from '@/app/theme/shadows';
import { getOpacifyColor } from '@/app/utils/colors';

import { DEFAULT_BUTTON_HEIGHT } from '../constants';

type ButtonSize = 's' | 'm';

export type StyleProps = {
  size?: ButtonSize;
};

const BUTTON_HEIGHT: Record<ButtonSize, number> = {
  s: DEFAULT_BUTTON_HEIGHT.SMALL,
  m: DEFAULT_BUTTON_HEIGHT.MEDIUM,
};

export const getStyles = ({ size = 'm' }: StyleProps) => {
  return {
    container: css({
      all: 'unset',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: BUTTON_HEIGHT[size],
      borderRadius: '50%',
      aspectRatio: '1/1',
      border: `solid ${borderWidths.l}px ${getOpacifyColor('white', 's')}`,
      cursor: 'pointer',
      transitionDuration: durations.s,
      ':hover': {
        backgroundColor: getOpacifyColor('white', 's'),
        border: `solid ${borderWidths.l}px ${getOpacifyColor('white', 'm')}`,
        boxShadow: shadows.l,
      },
      ':active': {
        transform: scales.smaller,
      },
    }),
  };
};
