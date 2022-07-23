---
to: src/components/<%= directory %>/<%= name %>/index.tsx
unless_exists: true
---
import React from 'react';

import { Styled } from './styled';

type Props = {
  name: string;
};

export const <%= name %>: React.FC<Props> = ({ name }) => {
  return <Styled.Example>{name}</Styled.Example>;
};
