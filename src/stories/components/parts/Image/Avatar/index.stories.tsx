import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Avatar } from '@/components/parts/Image/Avatar';

export default {
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Index: ComponentStoryObj<typeof Avatar> = {
  args: {
    size: 'm',
    src: undefined,
  },
};
