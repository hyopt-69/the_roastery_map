import React from 'react';

import { StyleProps, getStyles } from './styles';

type Props = {
  children: string;
} & StyleProps;

export const Body: React.FC<Props> = ({ children, ...styleProps }) => {
  return <p css={getStyles(styleProps)}>{children}</p>;
};
