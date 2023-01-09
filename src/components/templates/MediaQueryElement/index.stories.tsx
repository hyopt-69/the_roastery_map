import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { DummyContent } from '@/dummy/components/DummyContent';
import { colors } from '@/theme/colors';

import { MediaQueryElement } from '.';

export default {
  component: MediaQueryElement,
} as ComponentMeta<typeof MediaQueryElement>;

export const Index: ComponentStoryObj<typeof MediaQueryElement> = {
  args: {
    mobile: <DummyContent height={200} backgroundColor={colors.cinderella} />,
    desktop: <DummyContent height={200} backgroundColor={colors.blackHaze} />,
  },
};
