import { css } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
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
const DEFAULT_OVERLAY_SIZE = BUTTON_HEIGHT * 4;
const ACTIVE_OVERLAY_SIZE = BUTTON_HEIGHT * 2.5;

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
      background: `linear-gradient(to right, ${colors.sunsetOrange}, ${colors.valencia})`,
      cursor: 'pointer',
      '::before': {
        content: '""',
        position: 'absolute',
        borderRadius: '50%',
        width: DEFAULT_OVERLAY_SIZE,
        height: DEFAULT_OVERLAY_SIZE,
        opacity: opacities.l,
        top: pointerPosition?.y || BUTTON_HEIGHT / 2,
        left: pointerPosition?.x || 0,
        transitionTimingFunction: 'ease-out',
        transition: `
          top ${durations.xxl},
          left ${durations.xxl},
          opacity ${durations.xxl},
          width ${durations.m},
          height ${durations.m}
        `,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle closest-side, ${colors.froly}, ${colors.transparent})`,
      },
      ':hover::before': {
        opacity: opacities.default,
      },
      ':active::before': {
        width: ACTIVE_OVERLAY_SIZE,
        height: ACTIVE_OVERLAY_SIZE,
      },
    },

    ':disabled': {
      backgroundColor: colors.gallery,
      cursor: 'not-allowed',
    },
  });
