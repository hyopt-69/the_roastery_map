import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { QRcode } from '@/components/parts/QRcode';

const DUMMY_URL = 'google.com';

export default {
  component: QRcode,
} as ComponentMeta<typeof QRcode>;

export const Index: ComponentStoryObj<typeof QRcode> = {
  args: {
    url: DUMMY_URL,
    size: 's',
  },
};
