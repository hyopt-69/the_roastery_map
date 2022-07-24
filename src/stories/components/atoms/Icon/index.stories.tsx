import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Icon } from '@/components/atoms/Icon';

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const HasAction: ComponentStoryObj<typeof Icon> = {
  args: {
    pattern: 'example',
    onClick: () => {},
  },
};
export const HasNoAction: ComponentStoryObj<typeof Icon> = {
  args: {
    pattern: 'example',
    onClick: undefined,
  },
};
