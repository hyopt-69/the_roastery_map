import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsList } from '.';

export default {
  component: NewsList,
} as ComponentMeta<typeof NewsList>;

export const Index: ComponentStoryObj<typeof NewsList> = {
  args: {
    children: 'Example',
  },
};
