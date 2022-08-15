import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Footer } from '@/components/patterns/Footer';

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Index: ComponentStoryObj<typeof Footer> = {
  args: {
    children: 'Example',
  },
};
