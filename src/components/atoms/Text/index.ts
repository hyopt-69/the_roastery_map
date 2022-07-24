import { styled } from '@linaria/react';

import { Color, colors } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';

const lineHeights = {
  normal: '1.2',
  wide: '1.5',
} as const;

const fontWeights = {
  normal: 'normal',
  bold: 'bold',
} as const;

const letterSpacings = {
  normal: '1px',
  wide: '2px',
} as const;

// FIXME: 適当なのでいいのを見つける。
const fontFamilies = {
  normal: 'sans-serif',
  bold: 'sans-serif',
} as const;

export type Typography = {
  lineHeight: keyof typeof lineHeights;
  letterSpacing: keyof typeof letterSpacings;
  family: keyof typeof fontFamilies;
  weight: keyof typeof fontWeights;
};

type Props = {
  color: Color;
  size: FontSize;
} & Partial<Typography>;

export const Text = styled.p<Props>`
  color: ${({ color }) => colors[color]};
  font-size: ${({ size }) => fontSizes[size]};
  font-weight: ${({ weight }) => fontWeights[weight || 'normal']};
  font-family: ${({ family }) => fontFamilies[family || 'normal']};
  line-height: ${({ lineHeight }) => lineHeights[lineHeight || 'normal']};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacings[letterSpacing || 'normal']};
`;
