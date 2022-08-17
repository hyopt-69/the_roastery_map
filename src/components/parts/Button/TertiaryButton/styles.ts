import { css, CSSObject } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { scales } from '@/app/theme/scales';
import { spaces } from '@/app/theme/spaces';

import { DEFAULT_BUTTON_HEIGHT, DEFAULT_BUTTON_WIDTH } from '../constants';

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
    height: DEFAULT_BUTTON_HEIGHT,
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
