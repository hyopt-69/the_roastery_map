import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { SecondaryButton } from '@/components/parts/SecondaryButton';

export default {
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

export const Index: ComponentStoryObj<typeof SecondaryButton> = {
  args: {
    children: 'Example',
    size: 'm',
    iconPattern: undefined,
    disabled: false,
  },
};
