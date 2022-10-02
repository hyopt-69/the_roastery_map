import { css } from '@emotion/react';

import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
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
      backgroundColor: getOpacifyColor('white', 'm'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: BUTTON_HEIGHT[size],
      borderRadius: '50%',
      aspectRatio: '1/1',
      border: `solid ${borderWidths.l}px ${colors.pumice}`,
      cursor: 'pointer',
      transitionDuration: durations.s,
      ':hover': {
        backgroundColor: getOpacifyColor('white', 'l'),
        boxShadow: shadows.m,
      },
    }),
  };
};
