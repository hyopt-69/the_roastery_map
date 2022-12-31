import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DUMMY_ROASTER_DATA } from '@/dummy/data/roaster';

import { RoasterCard } from '.';

export default {
  component: RoasterCard,
} as ComponentMeta<typeof RoasterCard>;

export const Index: ComponentStoryObj<typeof RoasterCard> = {
  args: {
    ...DUMMY_ROASTER_DATA,
    image: DUMMY_ROASTER_DATA.images[0],
  },
};
