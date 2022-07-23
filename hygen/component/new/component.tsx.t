---
to: src/components/<%= directory %>/<%= name %>/index.tsx
unless_exists: true
---
import React from 'react';

import { Styled } from './styled';

type Props = {
  chldren: string;
};

export const <%= name %>: React.FC<Props> = ({ children }) => {
  return <Styled.Example>{children}</Styled.Example>;
};
