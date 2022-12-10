import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { PrimaryButton } from '.';

export default {
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Index: ComponentStoryObj<typeof PrimaryButton> = {
  args: {
    children: 'Example',
    size: 'm',
    iconPattern: undefined,
    disabled: false,
  },
};
