import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
} & StyleProps;

export const Label: React.FC<Props> = ({ children, ...styleProps }) => {
  return <p css={getStyles(styleProps)}>{children}</p>;
};
