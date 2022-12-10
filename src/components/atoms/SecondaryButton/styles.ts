import { css, CSSObject } from '@emotion/react';

import { DEFAULT_BUTTON_HEIGHT, DEFAULT_BUTTON_WIDTH } from '@/constants/sizes';
import { borderRadiuses } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';
import { scales } from '@/theme/scales';
import { spaces } from '@/theme/spaces';

type ButtonSize = 'm' | 'l' | 'auto';

export type StyleProps = {
  size?: ButtonSize;
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

export const getButtonStyle = ({ size = 'auto' }: StyleProps) =>
  css({
    all: 'unset',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: DEFAULT_BUTTON_HEIGHT.LARGE,
    width: BUTTON_WIDTH[size],
    borderRadius: borderRadiuses.m,
    paddingLeft: spaces.s,
    paddingRight: spaces.s,

    ':enabled': {
      backgroundColor: colors.mirage,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: colors.black,
      },
      ':active': {
        transform: scales.smaller,
      },
    },

    ':disabled': {
      backgroundColor: colors.blackHaze,
      cursor: 'not-allowed',
    },
  });
