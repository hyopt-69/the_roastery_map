import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { NewsListEmptyContent } from '.';

export default {
  component: NewsListEmptyContent,
} as ComponentMeta<typeof NewsListEmptyContent>;

export const Index: ComponentStoryObj<typeof NewsListEmptyContent> = {
  args: {},
};
