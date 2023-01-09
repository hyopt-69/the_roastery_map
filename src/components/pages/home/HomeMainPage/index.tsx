import React from 'react';

import { Title } from '@/components/atoms/Title';
import { BasicLayout } from '@/components/templates/BasicLayout';

import { styles } from './styles';

export const HomeMainPage: React.FC = () => {
  return (
    <BasicLayout currentPath="HOME">
      <main css={styles.container}>
        <Title size="l">HomeMainPage</Title>
      </main>
    </BasicLayout>
  );
};
