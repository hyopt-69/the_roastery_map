import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import {
  getBreakStyle,
  getFluidFontSize,
  mediaQuery,
} from '@/app/utils/responsive';
import { getTypography, Typography } from '@/app/utils/typography';

export type StyleProps = {
  size?: FontSize;
  mqSizes?: [FontSize, FontSize];
  color?: Color;
  maxLine?: number;
} & Partial<Typography>;

export const getStyles = ({
  size,
  mqSizes,
  maxLine,
  color = 'mirage',
  weight,
}: StyleProps) => {
  return css(
    {
      ...getBreakStyle(maxLine),
      ...getTypography({
        size,
        color,
        weight,
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
