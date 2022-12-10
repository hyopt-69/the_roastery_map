import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { DummyContent } from '@/dummy/components/DummyContent';

import { BalloonWrapper } from '.';

export default {
  component: BalloonWrapper,
} as ComponentMeta<typeof BalloonWrapper>;

export const Index: ComponentStoryObj<typeof BalloonWrapper> = {
  args: {
    pointDirection: 'down',
    color: 'white',
  },
  render: (args) => (
    <BalloonWrapper {...args}>
      <DummyContent width={700} height={100} />
    </BalloonWrapper>
  ),
};
