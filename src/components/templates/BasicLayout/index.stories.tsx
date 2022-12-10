import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { DummyContent } from '@/dummy/components/DummyContent';
import { colors } from '@/theme/colors';

import { BasicLayout } from '.';

export default {
  component: BasicLayout,
} as ComponentMeta<typeof BasicLayout>;

export const Index: ComponentStoryObj<typeof BasicLayout> = {
  args: {
    children: <DummyContent height={1200} backgroundColor={colors.blackHaze} />,
  },
};
