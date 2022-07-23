import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Title } from '@/components/atoms/Text/Title';

export default {
  component: Title,
} as ComponentMeta<typeof Title>;

export const Index: ComponentStoryObj<typeof Title> = {
  args: {
    children: 'Example',
  },
};
