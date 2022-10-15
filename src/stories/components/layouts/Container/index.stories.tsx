import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '@/app/theme/colors';
import { Container } from '@/components/layouts/Container';
import { DummyContent } from '@/stories/dummy/element';

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

export const Index: ComponentStoryObj<typeof Container> = {
  args: {
    children: <DummyContent height={200} backgroundColor={colors.blackHaze} />,
  },
};
