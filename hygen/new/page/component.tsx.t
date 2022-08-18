---
to: src/components/pages/<%= directory %>/<%= name %>/index.tsx
unless_exists: true
---
import React from 'react';

import { styles } from './styles';

type Props = {
  children: string;
};

export const <%= name %>: React.FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};
