import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';
import { getTypography, Typography } from '@/app/utils/styles/getTypography';

const getTypographyDetails = (size: FontSize): Typography => {
  switch (size) {
    case 'xxs':
    case 'xs':
    case 's':
    case 'm':
      return {
        lineHeight: 'normal',
        letterSpacing: 'normal',
        weight: 'normal',
        family: 'normal',
      };
    case 'l':
    case 'xl':
    case 'xxl':
      return {
        lineHeight: 'wide',
        letterSpacing: 'wide',
        weight: 'bold',
        family: 'bold',
      };
    default:
      return {
        lineHeight: 'normal',
        letterSpacing: 'normal',
        weight: 'normal',
        family: 'normal',
      };
  }
};

export type StyleProps = {
  size: FontSize;
  color?: Color;
};

export const getTextStyle = ({ size, color = 'vulcan' }: StyleProps) => {
  const { lineHeight, letterSpacing, weight, family } =
    getTypographyDetails(size);

  return css({
    ...getTypography({
      size,
      color,
      lineHeight,
      letterSpacing,
      weight,
      family,
    }),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });
};
