import React from 'react';

import { Styled, TextStyleProps } from './styled';

type Props = {
  children: React.ReactNode;
  as: Extract<React.ElementType, 'h1' | 'h2' | 'h3' | 'p'>;
} & TextStyleProps;

export const Text: React.FC<Props> = ({ as, children, ...textStyleProps }) => {
  return (
    <Styled.Text as={as} {...textStyleProps}>
      {children}
    </Styled.Text>
  );
};
