import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { SecondaryButton } from '@/components/parts/Button/SecondaryButton';
import { ImageModal } from '@/components/patterns/Modal/ImageModal';
import { DUMMY_PNG } from '@/stories/dummy/asset';

export default {
  component: ImageModal,
} as ComponentMeta<typeof ImageModal>;

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SecondaryButton size="l" onClick={() => setIsVisible(true)}>
        Modalを表示
      </SecondaryButton>
      <ImageModal
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        imageSrcList={[DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG, DUMMY_PNG]}
      />
    </>
  );
};

export const Index: ComponentStoryObj<typeof ImageModal> = {
  render: () => <Story />,
};
