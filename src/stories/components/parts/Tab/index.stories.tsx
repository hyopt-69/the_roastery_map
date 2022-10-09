import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '@/app/theme/colors';
import { Tab } from '@/components/parts/Tab';
import { DummyContent } from '@/stories/dummy/element';

export default {
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const Index: ComponentStoryObj<typeof Tab> = {
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
