import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { PreviewModal } from '@/components/patterns/Modal/PreviewModal';
import { DUMMY_PNG } from '@/stories/dummy/asset';
import { DummyButton } from '@/stories/dummy/element';

export default {
  component: PreviewModal,
} as ComponentMeta<typeof PreviewModal>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <DummyButton onClick={() => setIsVisible(true)}>Modalを表示</DummyButton>
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
