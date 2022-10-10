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
    lineHeight: 1.2,
  };
};
