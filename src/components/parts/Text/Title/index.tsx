import { css } from '@emotion/react';
import React from 'react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';

type TitleSize = Extract<FontSize, 'xxl' | 'xl' | 'l'>;

type Props = {
  children: string;
  // size: TitleSize;
  color?: Color;
};

export const Title: React.FC<Props> = ({
  children,
  // size,
  color = 'vulcan',
}) => {
  return <div css={css({ color: 'red' })}>あああ</div>;
};
