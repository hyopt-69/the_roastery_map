import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
} & StyleProps;

export const Card: React.FC<Props> = ({ children, ...styleProps }) => {
  return <div css={getStyles(styleProps)}>{children}</div>;
};
