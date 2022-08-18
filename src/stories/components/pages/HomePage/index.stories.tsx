import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { HomePage } from '@/components/pages/HomePage';

export default {
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Index: ComponentStoryObj<typeof HomePage> = {
  args: {
    children: 'Example',
  },
};
