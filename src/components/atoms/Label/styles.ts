import { css } from '@emotion/react';

import { Color } from '@/theme/colors';
import { FontSize, fontSizes } from '@/theme/fontSizes';
import {
  getBreakStyle,
  getFluidFontSize,
  mediaQuery,
} from '@/utils/responsive';
import { getTypography, Typography } from '@/utils/typography';

type LabelBaseProps = {
  color?: Color;
  maxLine?: number;
} & Partial<Typography>;

type StaticLabelProps = {
  size: FontSize;
  mqSizes?: never;
} & LabelBaseProps;

type DynamicLabelProps = {
  size?: never;
  mqSizes: [FontSize, FontSize];
} & LabelBaseProps;

export type StyleProps = StaticLabelProps | DynamicLabelProps;

export const getStyles = ({
  size,
  mqSizes,
  maxLine,
  color = 'mirage',
  weight,
  lineHeight,
}: StyleProps) => {
  return css(
    {
      ...getBreakStyle(maxLine),
      ...getTypography({
        size,
        color,
        weight,
        lineHeight,
      }),
      cursor: 'inherit',
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
};
