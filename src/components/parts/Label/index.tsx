import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: string;
} & StyleProps;

export const Label: React.FC<Props> = ({
  children,
  size,
  mqSizes,
  color,
  weight,
}) => {
  return <p css={getStyles({ size, color, mqSizes, weight })}>{children}</p>;
};
