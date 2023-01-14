import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { DUMMY_HTML } from '@/dummy/html';

import { HtmlParser } from '.';

export default {
  component: HtmlParser,
} as ComponentMeta<typeof HtmlParser>;

export const Index: ComponentStoryObj<typeof HtmlParser> = {
  args: {
    html: DUMMY_HTML,
  },
};
