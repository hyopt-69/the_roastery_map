import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { DummyButton } from '@/dummy/components/DummyButton';

import { BasicModal } from '.';

export default {
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <DummyButton onClick={() => setIsVisible(true)} />
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
