import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsMainPage } from '.';

export default {
  component: NewsMainPage,
} as ComponentMeta<typeof NewsMainPage>;

export const Index: ComponentStoryObj<typeof NewsMainPage> = {
  args: {
    children: 'Example',
  },
};
