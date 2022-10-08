import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { TertiaryButton } from '@/components/parts/TertiaryButton';

export default {
  component: TertiaryButton,
} as ComponentMeta<typeof TertiaryButton>;

export const Index: ComponentStoryObj<typeof TertiaryButton> = {
  args: {
    children: 'Example',
    iconPattern: undefined,
    disabled: false,
  },
};
