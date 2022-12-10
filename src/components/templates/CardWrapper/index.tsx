import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
} & StyleProps;

export const CardWrapper: React.FC<Props> = ({ children, ...styleProps }) => {
  return (
    <article role="none" css={getStyles(styleProps)}>
      {children}
    </article>
  );
};
