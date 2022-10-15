import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '@/app/theme/colors';
import { ScrollContainer } from '@/components/parts/ScrollContainer';
import { DummyContent } from '@/stories/dummy/element';

export default {
  component: ScrollContainer,
} as ComponentMeta<typeof ScrollContainer>;

export const Index: ComponentStoryObj<typeof ScrollContainer> = {
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
