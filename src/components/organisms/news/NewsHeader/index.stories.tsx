import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsHeader } from '.';

export default {
  component: NewsHeader,
} as ComponentMeta<typeof NewsHeader>;

export const Index: ComponentStoryObj<typeof NewsHeader> = {
  args: {
    onClickItem: () => {},
    activeCategory: 'All',
  },
};
