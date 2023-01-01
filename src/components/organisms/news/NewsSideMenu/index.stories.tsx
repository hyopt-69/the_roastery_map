import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsSideMenu } from '.';

export default {
  component: NewsSideMenu,
} as ComponentMeta<typeof NewsSideMenu>;

export const Index: ComponentStoryObj<typeof NewsSideMenu> = {
  args: {
    activeCategory: 'All',
  },
};
