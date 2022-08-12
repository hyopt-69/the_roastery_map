import React from 'react';

import { StyleProps, getStyles } from './styles';

type Props = {
  children: string;
} & StyleProps;

export const Body: React.FC<Props> = ({ children, size, mqSizes, color }) => {
  return <p css={getStyles({ size, mqSizes, color })}>{children}</p>;
};
