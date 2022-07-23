---
to: src/components/<%= directory %>/<%= name %>/index.tsx
unless_exists: true
---
import React from 'react';

import { Example } from './styled';

type Props = {
  name: string;
};

export const <%= name %>: React.FC<Props> = ({ name }) => {
  return <Example>{name}</Example>;
};
