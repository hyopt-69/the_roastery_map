import { css } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { colors } from '@/app/theme/colors';
import { spaces } from '@/app/theme/spaces';

export type ButtonSize = 'm' | 'l';

type StyleProps = {
  size: ButtonSize;
};

const BUTTON_WIDTH: Record<ButtonSize, number> = {
  m: 100,
  l: 300,
};

const BUTTON_HEIGHT = 48;

export const styles = {
  innerWrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces.xs,
  }),
};

export const getButtonStyle = ({ size }: StyleProps) =>
  css({
    all: 'unset',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: BUTTON_HEIGHT,
    minWidth: BUTTON_WIDTH[size],
    borderRadius: borderRadiuses.m,
    paddingLeft: spaces.s,
    paddingRight: spaces.s,

    ':enabled': {
      backgroundColor: colors.vulcan,
      cursor: 'pointer',
    },

    ':disabled': {
      backgroundColor: colors.gallery,
      cursor: 'not-allowed',
    },
  });
