import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { DummyContent } from '@/dummy/components/DummyContent';

import { CardWrapper } from '.';

export default {
  component: CardWrapper,
} as ComponentMeta<typeof CardWrapper>;

export const Index: ComponentStoryObj<typeof CardWrapper> = {
  args: {
    hasTransition: true,
    shadow: 's',
  },
  render: (args) => (
    <CardWrapper {...args}>
      <DummyContent width={200} height={200} onClick={action('click')} />
    </CardWrapper>
  ),
};
