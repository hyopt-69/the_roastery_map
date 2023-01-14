import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
  Tag?: Extract<React.ElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
} & StyleProps;

export const Title: React.FC<Props> = ({
  children,
  Tag = 'h1',
  ...styleProps
}) => {
  return <Tag css={getStyles(styleProps)}>{children}</Tag>;
};
