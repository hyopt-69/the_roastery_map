import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import { getFluidFontSize } from '@/app/utils/styles/getFluidFontSize';
import { getTypography } from '@/app/utils/styles/getTypography';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

type TitleSize = Extract<FontSize, 'xxl' | 'xl' | 'l' | 'm' | 's'>;

export type StyleProps = {
  size: TitleSize;
  mqSizes?: [TitleSize, TitleSize];
  color?: Color;
};

export const getStyles = ({ size, mqSizes, color = 'mirage' }: StyleProps) =>
  css(
    {
      ...getTypography({
        size,
        color,
        weight: 'bold',
        lineHeight: 'wide',
        letterSpacing: 'wide',
      }),
      whiteSpace: 'nowrap',
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
