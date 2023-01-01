import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DUMMY_ARTICLE_DATA } from '@/dummy/data/news';

import { NewsCard } from '.';

export default {
  component: NewsCard,
} as ComponentMeta<typeof NewsCard>;
export const Index: ComponentStoryObj<typeof NewsCard> = {
  args: {
    ...DUMMY_ARTICLE_DATA,
  },
};
