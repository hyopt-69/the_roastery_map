import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { DUMMY_PNG } from '@/dummy/asset';
import { DummyButton } from '@/dummy/components/DummyButton';

import { PreviewModal } from '.';

export default {
  component: PreviewModal,
} as ComponentMeta<typeof PreviewModal>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <DummyButton onClick={() => setIsVisible(true)} />
      <PreviewModal
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        imageSrcList={[DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG]}
      />
    </>
  );
};

export const Index: ComponentStoryObj<typeof PreviewModal> = {
  render: () => <Story />,
};
