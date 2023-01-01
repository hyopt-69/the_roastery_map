import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsHeaderTab } from '.';

export default {
  component: NewsHeaderTab,
} as ComponentMeta<typeof NewsHeaderTab>;

export const Index: ComponentStoryObj<typeof NewsHeaderTab> = {
  args: {
    onClickItem: () => {},
    activeCategory: 'All',
  },
};
