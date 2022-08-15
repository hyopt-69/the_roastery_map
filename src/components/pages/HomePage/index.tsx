import React, { useState } from 'react';

import { TertiaryButton } from '@/components/parts/TertiaryButton';
import { Title } from '@/components/parts/Title';
import { BasicModal } from '@/components/patterns/Modal/BasicModal';

export const HomePage: React.FC = () => {
  const [a, seta] = useState(false);
  return (
    <>
      <Title size="l">Home</Title>
      <TertiaryButton
        onClick={() => {
          seta((pre) => !pre);
        }}
      >
        あ
      </TertiaryButton>
      <BasicModal
        isVisible={a}
        title="タイトル"
        handleClose={() => seta(false)}
      />
    </>
  );
};
