import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { DummyContent } from '@/dummy/components/DummyContent';
import { colors } from '@/theme/colors';

import { ScrollWrapper } from '.';

export default {
  component: ScrollWrapper,
} as ComponentMeta<typeof ScrollWrapper>;

export const Index: ComponentStoryObj<typeof ScrollWrapper> = {
  args: {
    children: [...new Array(15)].map(() => (
      <DummyContent
        width={100}
        height={100}
        backgroundColor={colors.blackHaze}
        onClick={action('onClick')}
      />
    )),
  },
};
