import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Body } from '@/components/atoms/Text/Body';

export default {
  component: Body,
} as ComponentMeta<typeof Body>;

export const Index: ComponentStoryObj<typeof Body> = {
  args: {
    children: 'Example',
  },
};
