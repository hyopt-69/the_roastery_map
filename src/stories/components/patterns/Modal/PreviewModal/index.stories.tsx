import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { SecondaryButton } from '@/components/parts/Button/SecondaryButton';
import { PreviewModal } from '@/components/patterns/Modal/PreviewModal';
import { DUMMY_PNG } from '@/stories/dummy/asset';

export default {
  component: PreviewModal,
} as ComponentMeta<typeof PreviewModal>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SecondaryButton size="l" onClick={() => setIsVisible(true)}>
        Modalを表示
      </SecondaryButton>
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
