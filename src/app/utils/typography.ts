import { CSSObject } from '@emotion/react';

import { breakPoints, MAX_WINDOW_WIDTH } from '@/app/theme/breakPoints';
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
  };
};

// NOTE: 参考記事: https://illustswitch.com/css-clamp-preferredvalue/
export const getFluidFontSize = ({
  min,
  max,
}: {
  min: FontSize;
  max: FontSize;
}) => {
  const round = (num: number) => {
    // 有効数字
    const SIGNIFICANT = 1_000;
    const roundedNum = Math.round(num * SIGNIFICANT);
    return roundedNum / SIGNIFICANT;
  };

  const minFont = fontSizes[min];
  const maxFont = fontSizes[max];
  const minViewPort = breakPoints.mobile;
  const maxViewPort = MAX_WINDOW_WIDTH;

  const slope = (maxFont - minFont) / (maxViewPort - minViewPort);
  const preferredValue = `
    ${round(minFont - minViewPort * slope)}px + ${round(slope * 100)}vw`;

  return `clamp(${minFont}px, ${preferredValue}, ${maxFont}px)`;
};
