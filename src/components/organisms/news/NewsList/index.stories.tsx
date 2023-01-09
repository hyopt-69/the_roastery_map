import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { getDummyNewsList } from '@/dummy/data/news';

import { NewsList } from '.';

export default {
  component: NewsList,
} as ComponentMeta<typeof NewsList>;

export const Index: ComponentStoryObj<typeof NewsList> = {
  args: {
    newsList: getDummyNewsList(10),
  },
};
