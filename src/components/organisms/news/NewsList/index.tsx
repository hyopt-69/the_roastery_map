import React from 'react';

import { styles } from './styles';

type Props = {
  children: string;
};

export const NewsList: React.FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>;
};
