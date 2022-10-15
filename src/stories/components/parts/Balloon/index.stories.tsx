import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Balloon } from '@/components/parts/Balloon';
import { DummyContent } from '@/stories/dummy/element';

export default {
  component: Balloon,
} as ComponentMeta<typeof Balloon>;

export const Index: ComponentStoryObj<typeof Balloon> = {
  args: {
    pointDirection: 'down',
    color: 'white',
  },
  render: (args) => (
    <Balloon {...args}>
      <DummyContent width={700} height={100} />
    </Balloon>
  ),
};
