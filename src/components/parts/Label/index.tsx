import React from 'react';

import { getTextStyle, StyleProps } from './styles';

type Props = {
  children: string;
} & StyleProps;

export const Label: React.FC<Props> = ({ children, size, color }) => {
  return <p css={getTextStyle({ size, color })}>{children}</p>;
};
