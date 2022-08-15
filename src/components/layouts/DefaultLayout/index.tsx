import React from 'react';

import { Path } from '@/app/constants/path';

import { styles } from './styles';

import { Footer } from '../Footer';
import { Header } from '../Header';

type Props = {
  children: React.ReactNode;
  currentPath: Path;
};

export const DefaultLayout: React.FC<Props> = ({ children, currentPath }) => {
  return (
    <div css={styles.container}>
      <div css={styles.headerWrapper}>
        <Header currentPath={currentPath} />
      </div>
      {children}
      <Footer currentPath={currentPath} />
    </div>
  );
};
