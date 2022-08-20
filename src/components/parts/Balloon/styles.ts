import { css, CSSObject } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { Color, colors } from '@/app/theme/colors';
import { shadows, SHADOW_COLOR } from '@/app/theme/shadows';
import { spaces } from '@/app/theme/spaces';

type Direction = 'up' | 'down';
type Position = number | 'center';

export type StyleProps = {
  pointDirection?: Direction;
  pointPosition?: Position;
  color?: Color;
};

const getHorizontalPosition = (pos: Position): CSSObject => {
  const centerize = { left: 0, right: 0, margin: 'auto' };
  if (pos === 'center') return centerize;
  if (pos >= 0 && pos <= 50) {
    return { left: `calc(${pos}% + ${spaces.s}px)` };
  }
  if (pos > 50 && pos <= 100) {
    return { right: `calc(${100 - pos}% + ${spaces.s}px)` };
  }

  return centerize;
};

const getVerticalPosition = (dir: Direction): CSSObject => {
  if (dir === 'down') {
    return {
      top: '100%',
      translate: '0 -50%',
      boxShadow: `4px 4px 10px 0 ${SHADOW_COLOR}`,
    };
  }
  return {
    bottom: '100%',
    translate: '0 50%',
  };
};

const getPointStyle = ({
  pointDirection,
  pointPosition,
}: Required<
  Pick<StyleProps, 'pointDirection' | 'pointPosition'>
>): CSSObject => {
  return {
    ...getHorizontalPosition(pointPosition),
    ...getVerticalPosition(pointDirection),
  };
};

const POINT_SIZE = 16;

export const getStyles = ({
  pointDirection = 'down',
  pointPosition = 'center',
  color = 'white',
}: StyleProps) => {
  const contentColor = colors[color];

  return {
    container: css({
      position: 'relative',
      width: 'fit-content',
      backgroundColor: contentColor,
      borderRadius: borderRadiuses.m,
      boxShadow: shadows.l,
    }),
    content: css({
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'inherit',
      backgroundColor: contentColor,
    }),
    point: css({
      position: 'absolute',
      width: POINT_SIZE,
      aspectRatio: '1/1',
      backgroundColor: contentColor,

      rotate: '45deg',
      borderTopLeftRadius: borderRadiuses.s,
      borderBottomRightRadius: borderRadiuses.s,

      ...getPointStyle({ pointDirection, pointPosition }),
    }),
  };
};
