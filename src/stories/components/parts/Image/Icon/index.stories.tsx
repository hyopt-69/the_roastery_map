import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Icon } from '@/components/parts/Image/Icon';

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Index: ComponentStoryObj<typeof Icon> = {
  args: {
    pattern: 'X',
    size: 'm',
    stroke: 'mirage',
    fill: 'transparent',
  },
};
