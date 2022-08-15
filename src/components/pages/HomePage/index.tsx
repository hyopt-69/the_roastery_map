import React, { useState } from 'react';

import { Icon } from '@/components/parts/Icon';
import { TertiaryButton } from '@/components/parts/TertiaryButton';
import { Title } from '@/components/parts/Title';
import { BasicModal } from '@/components/patterns/Modal/BasicModal';

export const HomePage: React.FC = () => {
  const [a, seta] = useState(false);
  return (
    <>
      <Title size="l">Home</Title>
      <Icon pattern="EXAMPLE" />
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
