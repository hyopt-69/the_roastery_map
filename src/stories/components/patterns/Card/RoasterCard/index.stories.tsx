import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { RoasterCard } from '@/components/patterns/Card/RoasterCard';
import { DUMMY_ROASTER_DATA } from '@/stories/dummy/roaster';

export default {
  component: RoasterCard,
} as ComponentMeta<typeof RoasterCard>;

export const Index: ComponentStoryObj<typeof RoasterCard> = {
  args: {
    ...DUMMY_ROASTER_DATA,
  },
};
