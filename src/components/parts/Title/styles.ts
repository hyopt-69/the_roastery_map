import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';
import { getTypography } from '@/app/utils/styles/getTypography';

type TitleSize = Extract<FontSize, 'xxl' | 'xl' | 'l'>;

export type StyleProps = {
  size: TitleSize;
  color?: Color;
};

export const getTextStyle = ({ size, color = 'mirage' }: StyleProps) =>
  css({
    ...getTypography({
      size,
      color,
      weight: 'bold',
      family: 'bold',
      lineHeight: 'wide',
      letterSpacing: 'wide',
    }),
    whiteSpace: 'nowrap',
  });
