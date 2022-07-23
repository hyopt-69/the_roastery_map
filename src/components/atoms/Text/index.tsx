import { styled } from '@linaria/react';
import React from 'react';

import { Color, colors } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';

const lineHeights = {
  normal: 1.2,
  wide: 1.5,
} as const;

const fontWeights = {
  normal: 400,
  bold: 700,
} as const;

const letterSpacings = {
  normal: '1px',
  wide: '2px',
} as const;

const fontFamilies = {
  normal: 'sans-serif',
} as const;

type Typography = {
  color: Color;
  size: FontSize;
  lineHeight?: keyof typeof lineHeights;
  letterSpacing?: keyof typeof letterSpacings;
  family?: keyof typeof fontFamilies;
  weight?: keyof typeof fontWeights;
};

type Props = {
  children: React.ReactNode;
  as?: Extract<React.ElementType, 'h1' | 'h2' | 'h3' | 'p'>;
} & Typography;

export const Text: React.FC<Props> = ({
  as = 'p',
  children,
  ...typographyProps
}) => {
  return (
    <TextBase as={as} {...typographyProps}>
      {children}
    </TextBase>
  );
};

const TextBase = styled.p<Typography>`
  color: ${({ color }) => colors[color]};
  font-size: ${({ size }) => fontSizes[size]};
  font-weight: ${({ weight = 'normal' }) => fontWeights[weight]};
  font-family: ${({ family = 'normal' }) => fontFamilies[family]};
  line-height: ${({ lineHeight = 'normal' }) => lineHeights[lineHeight]};
  letter-spacing: ${({ letterSpacing = 'normal' }) =>
    letterSpacings[letterSpacing]};
`;
