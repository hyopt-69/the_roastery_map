import { css } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { scales } from '@/app/theme/scales';
import { Shadow, shadows } from '@/app/theme/shadows';

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
        boxShadow: shadows[HOVERED_SHADOW[shadow]],
      },
    }),
  });
