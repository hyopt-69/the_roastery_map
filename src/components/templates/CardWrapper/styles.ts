import { css } from '@emotion/react';

import { borderRadiuses } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { scales } from '@/theme/scales';
import { Shadow, shadows } from '@/theme/shadows';

type DefaultShadow = Exclude<Shadow, 'l'> | 'none';

export type StyleProps = {
  shadow?: DefaultShadow;
  hasTransition?: boolean;
};

const HOVERED_SHADOW: Record<DefaultShadow, Shadow> = {
  none: 's',
  s: 'm',
  m: 'l',
};

export const getStyles = ({
  shadow = 'none',
  hasTransition = true,
}: StyleProps) =>
  css({
    width: '100%',
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderRadius: borderRadiuses.l,

    ...(shadow !== 'none' && {
      boxShadow: shadows[shadow],
    }),
    ...(hasTransition && {
      transitionDuration: durations.s,
      ':hover': {
        transitionDuration: durations.m,
        transform: scales.bigger,
        translate: 'translate3d(0, 0, 0)',
        boxShadow: shadows[HOVERED_SHADOW[shadow]],
      },
    }),
  });
