import { SerializedStyles } from '@emotion/react';
import React from 'react';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
  cssProp?: SerializedStyles;
  css?: never;
};

// FIXME: このコンポーネントいらん。消す

export const Container: React.FC<Props> = ({ children, cssProp }) => {
  return <div css={[styles, cssProp]}>{children}</div>;
};
