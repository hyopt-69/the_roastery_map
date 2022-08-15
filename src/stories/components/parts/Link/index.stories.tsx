import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Link } from '@/components/parts/Link';
import { DUMMY_URL } from '@/stories/dummy/url';

export default {
  component: Link,
} as ComponentMeta<typeof Link>;

const Index: ComponentStoryObj<typeof Link> = {
  args: {
    children: 'Example',
    href: DUMMY_URL,
    weight: 'normal',
    target: '_blank',
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
