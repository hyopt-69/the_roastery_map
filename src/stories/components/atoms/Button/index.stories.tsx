import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Button } from '@/components/atoms/Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Index: ComponentStoryObj<typeof Button> = {
  args: {
    name: 'example'
  },
};
