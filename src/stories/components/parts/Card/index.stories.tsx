import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Card } from '@/components/parts/Card';
import { DummyContent } from '@/stories/dummy/element';

export default {
  component: Card,
} as ComponentMeta<typeof Card>;

export const Index: ComponentStoryObj<typeof Card> = {
  args: {
    hasTransition: true,
    shadow: 's',
  },
  render: (args) => (
    <Card {...args}>
      <DummyContent width={200} height={200} onClick={action('click')} />
    </Card>
  ),
};
