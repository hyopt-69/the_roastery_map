import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Header } from '@/components/patterns/Header';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Index: ComponentStoryObj<typeof Header> = {
  args: {
    currentPath: 'HOME',
  },
};
