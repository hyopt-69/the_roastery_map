import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsCategoryDescription } from '.';

export default {
  component: NewsCategoryDescription,
} as ComponentMeta<typeof NewsCategoryDescription>;

export const Index: ComponentStoryObj<typeof NewsCategoryDescription> = {
  args: {
    pattern: 'All',
  },
};
