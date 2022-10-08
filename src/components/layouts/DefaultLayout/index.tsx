import React from 'react';

import { Path } from '@/app/constants/paths';
import { Footer } from '@/components/patterns/Footer';
import { Header } from '@/components/patterns/Header';

import { styles } from './styles';

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
