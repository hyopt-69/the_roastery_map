import React from 'react';

import { StyleProps, getTextStyle } from './styles';

type Props = {
  children: string;
} & StyleProps;

export const Body: React.FC<Props> = ({ children, size, mqSizes, color }) => {
  return <p css={getTextStyle({ size, mqSizes, color })}>{children}</p>;
};
