import { css, CSSObject } from '@emotion/react';

import { DEFAULT_BUTTON_HEIGHT, DEFAULT_BUTTON_WIDTH } from '@/constants/sizes';
import { borderRadiuses } from '@/theme/borderRadius';
import { borderWidths } from '@/theme/borderWidths';
import { colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { scales } from '@/theme/scales';
import { spaces } from '@/theme/spaces';

type ButtonSize = 'm' | 'l' | 'auto';

export type StyleProps = {
  size?: ButtonSize;
  isOutlined?: boolean;
};

const BUTTON_WIDTH: Record<ButtonSize, CSSObject['width']> = {
  m: DEFAULT_BUTTON_WIDTH.MEDIUM,
  l: DEFAULT_BUTTON_WIDTH.LARGE,
  auto: 'auto',
};

export const styles = {
  innerWrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces.xs,
  }),
};

export const getStyles = ({ size = 'auto', isOutlined }: StyleProps) => {
  return css({
    all: 'unset',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: DEFAULT_BUTTON_HEIGHT.LARGE,
    width: BUTTON_WIDTH[size],

    paddingLeft: spaces.s,
    paddingRight: spaces.s,

    borderRadius: borderRadiuses.m,
    borderWidth: borderWidths.m,
    borderColor: colors.tapa,
    borderStyle: isOutlined ? 'solid' : 'none',

    ':enabled': {
      cursor: 'pointer',
      ':hover': {
        transitionDuration: durations.s,
        borderColor: colors.black,
        backgroundColor: colors.blackHaze,
      },
      ':active': {
        transform: scales.smaller,
      },
    },

    ':disabled': {
      cursor: 'not-allowed',
    },
  });
};
