import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Icon } from '.';

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Index: ComponentStoryObj<typeof Icon> = {
  args: {
    pattern: 'X',
    size: 'm',
    stroke: 'transparent',
    fill: 'mirage',
  },
};
