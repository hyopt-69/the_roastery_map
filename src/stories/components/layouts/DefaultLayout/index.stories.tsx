import { css } from '@emotion/react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { colors } from '@/app/theme/colors';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';

export default {
  component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

export const Index: ComponentStoryObj<typeof DefaultLayout> = {
  args: {
    children: (
      <div
        css={css({
          width: '100%',
          height: 1200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.blackHaze,
          color: colors.mirage,
        })}
      >
        DUMMY
      </div>
    ),
  },
};
