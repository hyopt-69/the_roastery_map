import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { DummyContent } from '@/dummy/components/DummyContent';
import { colors } from '@/theme/colors';

import { Container } from '.';

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

export const Index: ComponentStoryObj<typeof Container> = {
  args: {
    children: <DummyContent height={200} backgroundColor={colors.blackHaze} />,
  },
};
