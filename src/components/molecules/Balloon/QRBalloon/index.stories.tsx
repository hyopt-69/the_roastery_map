import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DUMMY_URL } from '@/dummy/url';

import { QRBalloon } from '.';

export default {
  component: QRBalloon,
} as ComponentMeta<typeof QRBalloon>;

export const Index: ComponentStoryObj<typeof QRBalloon> = {
  args: {
    url: DUMMY_URL,
  },
};
