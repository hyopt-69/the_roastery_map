import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { AVATARS } from '@/app/assets/images';
import { ArticleCard } from '@/components/patterns/Card/ArticleCard';
import { DUMMY_PNG } from '@/stories/dummy/asset';

export default {
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

export const Index: ComponentStoryObj<typeof ArticleCard> = {
  args: {
    title: 'タイトル',
    body: 'ボディボディボディボディボディボディボディボディボディボディボディボディボディボディ',
    src: DUMMY_PNG,
    createdAt: '2022.09.09',
    tags: ['recipe', 'event'],
    authorInfo: {
      name: 'K・okayama',
      src: AVATARS.ADMIN_KO,
    },
  },
};
