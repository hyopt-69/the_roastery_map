import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Label } from '@/components/atoms/Text/Label';

export default {
  component: Label,
} as ComponentMeta<typeof Label>;

export const Index: ComponentStoryObj<typeof Label> = {
  args: {
    children: 'Example',
  },
};
