import { css } from '@emotion/react';

import { Color } from '@/theme/colors';
import { FontSize, fontSizes } from '@/theme/fontSizes';
import {
  getBreakStyle,
  getFluidFontSize,
  mediaQuery,
} from '@/utils/responsive';
import { getTypography } from '@/utils/typography';

type TitleSize = Extract<FontSize, 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'>;

type BaseProps = {
  color?: Color;
  maxLine?: number;
};

type StaticTitleProps = {
  size: TitleSize;
  mqSizes?: never;
} & BaseProps;

type DynamicTitleProps = {
  size?: never;
  mqSizes: [TitleSize, TitleSize];
} & BaseProps;
export type StyleProps = StaticTitleProps | DynamicTitleProps;

export const getStyles = ({
  size,
  mqSizes,
  maxLine,
  color = 'mirage',
}: StyleProps) =>
  css(
    {
      ...getBreakStyle(maxLine),
      ...getTypography({
        size,
        color,
        weight: 'bold',
      }),
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
