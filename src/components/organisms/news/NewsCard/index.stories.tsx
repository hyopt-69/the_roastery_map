import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { AVATARS } from '@/assets/images';
import { DUMMY_ARTICLE_DATA } from '@/dummy/data/news';

import { NewsCard } from '.';

export default {
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;
export const Index: ComponentStoryObj<typeof NewsCard> = {
  args: {
    ...DUMMY_ARTICLE_DATA,
    authorInfo: {
      name: 'K・okayama',
      src: AVATARS.ADMIN_KO,
    },
  },
};
