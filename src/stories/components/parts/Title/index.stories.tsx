import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Title } from '@/components/parts/Title';

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

const Index: ComponentStoryObj<typeof Title> = {
  args: {
    children: 'Example',
    Tag: 'h1',
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
    mqSizes: ['s', 'xxl'],
  },
};
