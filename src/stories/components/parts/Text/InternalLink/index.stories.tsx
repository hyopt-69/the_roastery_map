import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { InternalLink } from '@/components/parts/Text/InternalLink';

export default {
  component: InternalLink,
} as ComponentMeta<typeof InternalLink>;

const Index: ComponentStoryObj<typeof InternalLink> = {
  args: {
    children: 'Example',
    path: 'HOME',
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
