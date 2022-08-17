import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { SecondaryButton } from '@/components/parts/Button/SecondaryButton';
import { BasicModal } from '@/components/patterns/Modal/BasicModal';

export default {
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <SecondaryButton size="l" onClick={() => setIsVisible(true)}>
        Modalを表示
      </SecondaryButton>
      <BasicModal
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
      />
    </>
  );
};

export const Index: ComponentStoryObj<typeof BasicModal> = {
  render: () => <Story />,
};
