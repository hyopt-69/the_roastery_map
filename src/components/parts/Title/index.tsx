import React from 'react';

import { getTextStyle, StyleProps } from './styles';

type Props = {
  children: string;
  Tag?: Extract<React.ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'p'>;
} & StyleProps;

export const Title: React.FC<Props> = ({
  children,
  size,
  Tag = 'p',
  color = 'mirage',
}) => {
  return <Tag css={getTextStyle({ size, color })}>{children}</Tag>;
};
