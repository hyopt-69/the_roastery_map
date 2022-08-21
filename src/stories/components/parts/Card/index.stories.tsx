import { css } from '@emotion/react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Card } from '@/components/parts/Card';

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
      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 200,
          height: 200,
        })}
      >
        Dummy
      </div>
    </Card>
  ),
};
