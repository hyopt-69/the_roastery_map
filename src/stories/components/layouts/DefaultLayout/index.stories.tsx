import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '@/app/theme/colors';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { DummyContent } from '@/stories/dummy/element';

export default {
  component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

export const Index: ComponentStoryObj<typeof DefaultLayout> = {
  args: {
    children: <DummyContent height={1200} backgroundColor={colors.blackHaze} />,
  },
};
