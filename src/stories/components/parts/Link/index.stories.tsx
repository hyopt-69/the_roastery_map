import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Link } from '@/components/parts/Link';
import { DUMMY_URL } from '@/stories/dummy/url';

export default {
  component: Link,
} as ComponentMeta<typeof Link>;

export const Index: ComponentStoryObj<typeof Link> = {
  args: {
    children: 'Example',
    href: DUMMY_URL,
    size: 'm',
    mqSizes: ['m', 'xxl'],
    weight: 'normal',
    target: '_blank',
    color: 'mirage',
    hoveredColor: 'mirage',
  },
};
