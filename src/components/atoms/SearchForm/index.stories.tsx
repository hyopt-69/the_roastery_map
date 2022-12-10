import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { SearchForm } from '.';

export default {
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

export const Index: ComponentStoryObj<typeof SearchForm> = {
  args: {
    placeholder: 'Search',
  },
};
