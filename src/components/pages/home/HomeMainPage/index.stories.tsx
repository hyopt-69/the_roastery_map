import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { HomeMainPage } from '.';

export default {
  component: HomeMainPage,
} as ComponentMeta<typeof HomeMainPage>;

export const Index: ComponentStoryObj<typeof HomeMainPage> = {
  args: {},
};
