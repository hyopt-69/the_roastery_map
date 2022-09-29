import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Tag } from '@/components/parts/Tag';

export default {
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Index: ComponentStoryObj<typeof Tag> = {
  args: {
    label: 'Example',
    pattern: 'default',
    onClick: () => {},
  },
};
