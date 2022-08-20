import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { QRBalloon } from '@/components/patterns/Balloon/QRBalloon';
import { DUMMY_URL } from '@/stories/dummy/url';

export default {
  component: QRBalloon,
} as ComponentMeta<typeof QRBalloon>;

export const Index: ComponentStoryObj<typeof QRBalloon> = {
  args: {
    url: DUMMY_URL,
  },
};
