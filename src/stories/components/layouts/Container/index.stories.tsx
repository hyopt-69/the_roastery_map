import { css } from '@emotion/react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '@/app/theme/colors';
import { Container } from '@/components/layouts/Container';

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

export const Index: ComponentStoryObj<typeof Container> = {
  args: {
    children: (
      <div
        css={css({
          width: '100%',
          height: 200,
          backgroundColor: colors.blackHaze,
        })}
      />
    ),
  },
};
