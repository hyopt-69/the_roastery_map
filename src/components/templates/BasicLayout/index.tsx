import React from 'react';

import { Divider } from '@/components/atoms/Divider';
import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { Path } from '@/constants/paths';

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
        <Divider borderColor="blackHaze" />
      </div>
      <div css={styles.contentWrapper}>{children}</div>
      <Footer currentPath={currentPath} />
    </div>
  );
};
