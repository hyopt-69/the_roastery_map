import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DUMMY_URL } from '@/dummy/url';

import { ExternalLink } from '.';

export default {
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Index: ComponentStoryObj<typeof ExternalLink> = {
  args: {
    children: 'Example',
    href: DUMMY_URL,
    weight: 'normal',
    color: 'mirage',
    hasUnderLine: false,
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
