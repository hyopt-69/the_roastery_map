import React from 'react';

import { StyleProps, getStyles } from './styles';

type Props = {
  children: React.ReactNode;
} & StyleProps;

export const Body: React.FC<Props> = ({ children, ...styleProps }) => {
  const { container } = getStyles(styleProps);

  return <p css={container}>{children}</p>;
};
