import { css } from '@emotion/react';

import { Color, colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import { spaces } from '@/app/theme/spaces';
import { getFluidFontSize } from '@/app/utils/styles/getFluidFontSize';
import { getTypography, Typography } from '@/app/utils/styles/getTypography';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

const getTypographyDetails = (size: FontSize): Omit<Typography, 'weight'> => {
  switch (size) {
    case 'xxs':
    case 'xs':
    case 's':
    case 'm':
      return {
        lineHeight: 'normal',
        letterSpacing: 'normal',
        family: 'normal',
      };
    case 'l':
    case 'xl':
    case 'xxl':
      return {
        lineHeight: 'wide',
        letterSpacing: 'wide',
        family: 'bold',
      };
    default:
      return {
        lineHeight: 'normal',
        letterSpacing: 'normal',
        family: 'normal',
      };
  }
};

export type StyleProps = {
  size: FontSize;
  mqSizes?: [FontSize, FontSize];
  color?: Color;
  weight?: Typography['weight'];
  hasUnderLine?: boolean;
};

export const getStyles = ({
  size,
  mqSizes,
  color = 'mirage',
  weight = 'normal',
  hasUnderLine = false,
}: StyleProps) => {
  const { lineHeight, letterSpacing, family } = getTypographyDetails(size);

  return css(
    {
      ...getTypography({
        color: 'pumice',
        size,
        lineHeight,
        letterSpacing,
        weight,
        family,
      }),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textDecoration: hasUnderLine ? 'underline' : 'none',
      textUnderlineOffset: spaces.xxs,
      transitionDuration: durations.s,
      ':hover': {
        color: colors[color],
      },
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
};
