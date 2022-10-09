import { css, CSSObject } from '@emotion/react';

import {
  DEFAULT_BUTTON_HEIGHT,
  DEFAULT_BUTTON_WIDTH,
} from '@/app/constants/sizes';
import { borderRadiuses } from '@/app/theme/borderRadius';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { scales } from '@/app/theme/scales';
import { spaces } from '@/app/theme/spaces';

export type ButtonSize = 'm' | 'l' | 'auto';
export type PointerPosition = {
  x: number;
  y: number;
};

type StyleProps = {
  size?: ButtonSize;
  pointerPosition?: PointerPosition;
};

const BUTTON_WIDTH: Record<ButtonSize, CSSObject['width']> = {
  m: DEFAULT_BUTTON_WIDTH.MEDIUM,
  l: DEFAULT_BUTTON_WIDTH.LARGE,
  auto: 'auto',
};

const BUTTON_HEIGHT = DEFAULT_BUTTON_HEIGHT.LARGE;
const DEFAULT_OVERLAY_SIZE = BUTTON_HEIGHT * 4;
const ACTIVE_OVERLAY_SIZE = BUTTON_HEIGHT * 2.5;
const LONG_DURATION = '1.6s';

export const styles = {
  innerWrapper: css({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces.xs,
  }),
};

export const getButtonStyle = ({
  size = 'auto',
  pointerPosition,
}: StyleProps) =>
  css({
    all: 'unset',
    overflow: 'hidden',
    position: 'relative',
    whiteSpace: 'nowrap',
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH[size],
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
          top ${LONG_DURATION},
          left ${LONG_DURATION},
          opacity ${LONG_DURATION},
          width ${durations.m},
          height ${durations.m}
        `,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle closest-side, ${colors.froly}, ${colors.transparent})`,
      },
      ':hover::before': {
        opacity: opacities.full,
      },
      ':active': {
        transform: scales.smaller,
        '::before': {
          width: ACTIVE_OVERLAY_SIZE,
          height: ACTIVE_OVERLAY_SIZE,
        },
      },
    },

    ':disabled': {
      backgroundColor: colors.blackHaze,
      cursor: 'not-allowed',
    },
  });
