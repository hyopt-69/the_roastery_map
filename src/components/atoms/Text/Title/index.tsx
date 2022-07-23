import { styled } from '@linaria/react';
import React from 'react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';

import { Text } from '..';

type TitleSize = Extract<FontSize, 'xxl' | 'xl' | 'l'>;

type Props = {
  children: React.ReactNode;
  size: TitleSize;
  color?: Color;
};

export const Title: React.FC<Props> = ({
  children,
  size,
  color = 'vulcan',
}) => {
  return (
    <Styled.Title
      as="h1"
      weight="bold"
      lineHeight="wide"
      letterSpacing="wide"
      color={color}
      size={size}
    >
      {children}
    </Styled.Title>
  );
};

const Styled = {
  Title: styled(Text)``,
};
