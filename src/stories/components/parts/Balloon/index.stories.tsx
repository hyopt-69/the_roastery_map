import { css } from '@emotion/react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Balloon } from '@/components/parts/Balloon';

export default {
  component: Balloon,
} as ComponentMeta<typeof Balloon>;

export const Index: ComponentStoryObj<typeof Balloon> = {
  args: {
    pointDirection: 'down',
    color: 'white',
  },
  render: (args) => (
    <Balloon {...args}>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 700,
          height: 100,
        })}
      >
        Dummy
      </div>
    </Balloon>
  ),
};
