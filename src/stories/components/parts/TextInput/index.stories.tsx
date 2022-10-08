import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { TextInput } from '@/components/parts/TextInput';

export default {
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Index: ComponentStoryObj<typeof TextInput> = {
  args: {
    placeholder: 'Search',
  },
};
