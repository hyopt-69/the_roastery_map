---
to: src/stories/components/pages/<%= directory %>/<%= name %>/index.stories.tsx
unless_exists: true
---

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { <%= name %> } from '@/components/pages/<%= directory %>/<%= name %>';

export default {
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

export const Index: ComponentStoryObj<typeof <%= name %>> = {
  args: {
    children: 'Example',
  },
};
