import { css } from '@emotion/react';

import { borderRadiuses } from '@/theme/borderRadius';
import { Color, colors } from '@/theme/colors';
import { shadows } from '@/theme/shadows';

type Direction = 'up' | 'down';

export type StyleProps = {
  pointDirection?: Direction;
  color?: Color;
};

const POINT_SIZE = 16;

export const getStyles = ({
  pointDirection = 'down',
  color = 'white',
}: StyleProps) => {
  const contentColor = colors[color];
  const isFacingDown = pointDirection === 'down';

  return {
    container: css({
      display: 'flex',
      flexDirection: isFacingDown ? 'column' : 'column-reverse',
      alignItems: 'center',
      width: 'fit-content',
      filter: `drop-shadow(${shadows.l})`,
    }),
    content: css({
      overflow: 'hidden',
      backgroundColor: contentColor,
      borderRadius: borderRadiuses.m,
    }),
    point: css({
      width: POINT_SIZE,
      aspectRatio: '1/1',
      backgroundColor: contentColor,

      rotate: '45deg',
      borderTopLeftRadius: borderRadiuses.s,
      borderBottomRightRadius: borderRadiuses.s,

      translate: isFacingDown ? '0 -50%' : '0 50%',
    }),
  };
};
