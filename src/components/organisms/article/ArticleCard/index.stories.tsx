import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { AVATARS } from '@/assets/images';
import { DUMMY_ARTICLE_DATA } from '@/dummy/data/article';

import { ArticleCard } from '.';

export default {
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;
export const Index: ComponentStoryObj<typeof ArticleCard> = {
  args: {
    ...DUMMY_ARTICLE_DATA,
    authorInfo: {
      name: 'K・okayama',
      src: AVATARS.ADMIN_KO,
    },
  },
};
