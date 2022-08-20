import { CSSObject } from '@emotion/react';

import { Color, colors } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';

const fontWeights = {
  normal: 400,
  bold: 600,
} as const;

const fontFamilies = {
  normal: 'Source Sans Pro, sans-serif',
} as const;

export type Typography = {
  family: keyof typeof fontFamilies;
  weight: keyof typeof fontWeights;
};

type Props = {
  color: Color;
  size?: FontSize;
} & Partial<Typography>;

export const getTypography = ({
  color,
  size = 'm',
  family = 'normal',
  weight = 'normal',
}: Props): CSSObject => {
  return {
    color: colors[color],
    fontSize: fontSizes[size],
    fontFamily: fontFamilies[family],
    fontWeight: fontWeights[weight],
  };
};
