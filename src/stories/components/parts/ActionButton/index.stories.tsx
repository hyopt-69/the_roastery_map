import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { ActionButton } from '@/components/parts/ActionButton';

export default {
  component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

export const Index: ComponentStoryObj<typeof ActionButton> = {
  args: {
    size: 'm',
    pattern: 'next',
  },
};
