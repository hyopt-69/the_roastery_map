import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';
import { getTypography, Typography } from '@/app/utils/styles/getTypography';

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
  color?: Color;
  weight?: Typography['weight'];
};

export const getTextStyle = ({
  size,
  color = 'vulcan',
  weight = 'normal',
}: StyleProps) => {
  const { lineHeight, letterSpacing, family } = getTypographyDetails(size);

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
