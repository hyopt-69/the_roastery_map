import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Title } from '@/components/parts/Title';

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

export const Index: ComponentStoryObj<typeof Title> = {
  args: {
    children: 'Example',
    Tag: 'p',
    size: 'l',
    color: 'vulcan',
  },
};
