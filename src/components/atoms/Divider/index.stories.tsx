import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Divider } from '.';

export default {
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Index: ComponentStoryObj<typeof Divider> = {
  args: {
    label: 'Example',
  },
};
