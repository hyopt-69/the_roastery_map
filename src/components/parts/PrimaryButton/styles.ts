import { css } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { spaces } from '@/app/theme/spaces';

export type ButtonSize = 'm' | 'l';
export type PointerPosition = {
  x: number;
  y: number;
};

type StyleProps = {
  size: ButtonSize;
  pointerPosition?: PointerPosition;
};

const BUTTON_WIDTH: Record<ButtonSize, number> = {
  m: 100,
  l: 300,
};

const BUTTON_HEIGHT = 48;
const OVERLAY_SIZE = BUTTON_HEIGHT * 5;

export const styles = {
  innerWrapper: css({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces.xs,
  }),
};

export const getButtonStyle = ({ size, pointerPosition }: StyleProps) =>
  css({
    all: 'unset',
    overflow: 'hidden',
    position: 'relative',
    whiteSpace: 'nowrap',

    height: BUTTON_HEIGHT,
    minWidth: BUTTON_WIDTH[size],
    borderRadius: borderRadiuses.m,
    paddingLeft: spaces.s,
    paddingRight: spaces.s,

    ':enabled': {
      backgroundColor: colors.sunsetOrange,
      cursor: 'pointer',
      ':before': {
        content: '""',
        position: 'absolute',
        width: OVERLAY_SIZE,
        height: OVERLAY_SIZE,
        borderRadius: OVERLAY_SIZE / 2,
        top: pointerPosition?.y || BUTTON_HEIGHT / 2,
        left: pointerPosition?.x || 0,
        transitionDuration: durations.l,
        transitionTimingFunction: 'ease-out',
        transitionProperty: 'top, left',
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle closest-side, ${colors.froly}, ${colors.transparent})`,
      },
    },

    ':disabled': {
      backgroundColor: colors.gallery,
      cursor: 'not-allowed',
    },
  });
