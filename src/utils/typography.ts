import { CSSObject } from '@emotion/react';

import { Color, colors } from '@/theme/colors';
import { FontSize, fontSizes } from '@/theme/fontSizes';

const fontWeights = {
  normal: 400,
  bold: 600,
} as const;

const fontFamilies = {
  normal: 'Source Sans Pro, sans-serif',
} as const;

const lineHeight = {
  small: 1.2,
  big: 1.5,
} as const;

const getLineHeight = (size: FontSize) => {
  switch (size) {
    case 'xxxl':
    case 'xxl':
    case 'xl':
    case 'l':
      return lineHeight.small;
    default:
      return lineHeight.big;
  }
};
export type Typography = {
  family: keyof typeof fontFamilies;
  weight: keyof typeof fontWeights;
};

type GetTypographyInput = {
  color: Color;
  size?: FontSize;
} & Partial<Typography>;

/**
 * デフォルトのタイポグラフィーのスタイルを設定するための関数
 *
 * @returns デフォルトのタイポグラフィーのスタイル
 */
export const getTypography = ({
  color,
  size = 'm',
  family = 'normal',
  weight = 'normal',
}: GetTypographyInput): CSSObject => {
  return {
    color: colors[color],
    fontSize: fontSizes[size],
    fontFamily: fontFamilies[family],
    fontWeight: fontWeights[weight],
    lineHeight: getLineHeight(size),
  };
};
