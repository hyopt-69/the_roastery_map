import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { HomePage } from '@/components/pages/home';

export default {
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const index: ComponentStoryObj<typeof HomePage> = {
  args: {},
};
