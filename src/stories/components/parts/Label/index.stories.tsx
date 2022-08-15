import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Label } from '@/components/parts/Label';

export default {
  component: Label,
} as ComponentMeta<typeof Label>;

const Index: ComponentStoryObj<typeof Label> = {
  args: {
    children: 'Example',
    weight: 'normal',
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
    mqSizes: ['m', 'xxl'],
  },
};
