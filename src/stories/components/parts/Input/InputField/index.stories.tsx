import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { InputField } from '@/components/parts/Input/InputField';

export default {
  component: InputField,
} as ComponentMeta<typeof InputField>;

export const Index: ComponentStoryObj<typeof InputField> = {
  args: {
    placeholder: 'Search',
  },
};
