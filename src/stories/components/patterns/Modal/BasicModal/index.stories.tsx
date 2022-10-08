import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { BasicModal } from '@/components/patterns/Modal/BasicModal';
import { DummyButton } from '@/stories/dummy/element';

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
