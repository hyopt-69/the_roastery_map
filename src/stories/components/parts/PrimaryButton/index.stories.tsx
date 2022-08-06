import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { PrimaryButton } from '@/components/parts/PrimaryButton';

export default {
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Index: ComponentStoryObj<typeof PrimaryButton> = {
  args: {
    disabled: false,
  },
};
