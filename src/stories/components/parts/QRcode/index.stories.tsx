import { css } from '@emotion/react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { QRcode } from '@/components/parts/QRcode';

const DUMMY_URL = 'google.com';

export default {
  component: QRcode,
} as ComponentMeta<typeof QRcode>;

export const Index: ComponentStoryObj<typeof QRcode> = {
  args: {
    url: DUMMY_URL,
  },
  render: (args) => (
    <div css={css({ width: 300 })}>
      <QRcode {...args} />
    </div>
  ),
};
