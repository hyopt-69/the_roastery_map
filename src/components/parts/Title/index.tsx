import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: string;
  Tag?: Extract<React.ElementType, 'h1' | 'h2' | 'h3' | 'h4'>;
} & StyleProps;

export const Title: React.FC<Props> = ({
  children,
  size,
  mqSizes,
  Tag = 'h1',
  color = 'mirage',
}) => {
  return <Tag css={getStyles({ size, mqSizes, color })}>{children}</Tag>;
};
