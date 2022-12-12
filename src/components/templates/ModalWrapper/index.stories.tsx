import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { DummyButton } from '@/dummy/components/DummyButton';
import { DummyContent } from '@/dummy/components/DummyContent';

import { ModalWrapper } from '.';

export default {
  component: ModalWrapper,
} as ComponentMeta<typeof ModalWrapper>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <DummyButton onClick={() => setIsVisible(true)} />
      <ModalWrapper
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
      >
        <DummyContent width={300} height={200} backgroundColor="white" />
      </ModalWrapper>
    </>
  );
};

export const Index: ComponentStoryObj<typeof ModalWrapper> = {
  render: () => <Story />,
};
