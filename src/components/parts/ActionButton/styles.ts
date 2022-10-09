import { css } from '@emotion/react';

import { DEFAULT_BUTTON_HEIGHT } from '@/app/constants/sizes';
import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { scales } from '@/app/theme/scales';
import { shadows } from '@/app/theme/shadows';
import { getOpacifyColor } from '@/app/utils/colors';

type ButtonSize = 's' | 'm';

export type StyleProps = {
  size?: ButtonSize;
  isTransparent?: boolean;
};

const BUTTON_HEIGHT: Record<ButtonSize, number> = {
  s: DEFAULT_BUTTON_HEIGHT.SMALL,
  m: DEFAULT_BUTTON_HEIGHT.LARGE,
};

const getBackgroundColor = (isTransparent: StyleProps['isTransparent']) => {
  if (isTransparent) {
    return {
      default: colors.transparent,
      hovered: getOpacifyColor('white', 's'),
    };
  }
  return { default: colors.white, hovered: colors.white };
};
export const getStyles = ({ size = 'm', isTransparent }: StyleProps) => {
  const bgColor = getBackgroundColor(isTransparent);

  return {
    container: css({
      all: 'unset',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: BUTTON_HEIGHT[size],
      borderRadius: '50%',
      aspectRatio: '1/1',
      borderStyle: 'solid',
      borderWidth: `${borderWidths.m}px`,
      borderColor: colors.tapa,
      cursor: 'pointer',
      transitionDuration: durations.s,
      backgroundColor: bgColor.default,
      ':hover': {
        backgroundColor: bgColor.hovered,
        borderColor: colors.pumice,
        boxShadow: shadows.l,
      },
      ':active': {
        transform: scales.smaller,
      },
    }),
  };
};
