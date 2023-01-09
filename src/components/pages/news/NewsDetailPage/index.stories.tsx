import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DUMMY_ARTICLE_DATA } from '@/dummy/data/news';

import { NewsDetailPage } from '.';

export default {
  component: NewsDetailPage,
} as ComponentMeta<typeof NewsDetailPage>;

export const Index: ComponentStoryObj<typeof NewsDetailPage> = {
  args: {
    news: DUMMY_ARTICLE_DATA,
  },
};
