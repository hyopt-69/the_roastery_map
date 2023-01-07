import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsHeaderMenu } from '.';

export default {
  component: NewsHeaderMenu,
} as ComponentMeta<typeof NewsHeaderMenu>;

export const Index: ComponentStoryObj<typeof NewsHeaderMenu> = {
  args: {
    activeCategory: 'UnSelect',
  },
};
