import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Body } from '@/components/parts/Body';

export default {
  component: Body,
} as ComponentMeta<typeof Body>;

const Index: ComponentStoryObj<typeof Body> = {
  args: {
    children: 'Example',
    color: 'mirage',
  },
};

export const Fixed = {
  args: {
    ...Index.args,
    size: 's',
  },
};

export const Fluid = {
  args: {
    ...Index.args,
    mqSizes: ['s', 'xl'],
  },
};
