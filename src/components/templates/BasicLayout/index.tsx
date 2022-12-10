import React from 'react';

import { Path } from '@/constants/paths';
import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';

import { styles } from './styles';

type Props = {
  children: React.ReactNode;
  currentPath: Path;
};

export const BasicLayout: React.FC<Props> = ({ children, currentPath }) => {
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
