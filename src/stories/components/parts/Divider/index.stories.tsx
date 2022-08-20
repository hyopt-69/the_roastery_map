import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Divider } from '@/components/parts/Divider';

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Index: ComponentStoryObj<typeof Divider> = {
  args: {
    label: 'Example',
  },
};
