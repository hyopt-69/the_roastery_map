import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { AVATARS } from '@/app/assets/images';
import { ArticleCard } from '@/components/patterns/Card/ArticleCard';
import { DUMMY_ARTICLE_DATA } from '@/stories/dummy/article';

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
