import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { getDummyArticleList } from '@/dummy/data/news';

import { NewsList } from '.';

export default {
  component: NewsList,
} as ComponentMeta<typeof NewsList>;

export const Index: ComponentStoryObj<typeof NewsList> = {
  args: {
    newsList: getDummyArticleList(10),
  },
};
