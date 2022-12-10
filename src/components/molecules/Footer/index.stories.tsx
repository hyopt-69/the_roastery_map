import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Footer } from '.';

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Index: ComponentStoryObj<typeof Footer> = {
  args: {
    currentPath: 'HOME',
  },
};
