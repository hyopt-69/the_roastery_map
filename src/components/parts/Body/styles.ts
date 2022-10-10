import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import {
  getBreakStyle,
  getFluidFontSize,
  mediaQuery,
} from '@/app/utils/responsive';
import { getTypography } from '@/app/utils/typography';

type BodySize = Extract<FontSize, 'l' | 'm' | 's' | 'xs' | 'xxs'>;

export type StyleProps = {
  size: BodySize;
  mqSizes?: [BodySize, BodySize];
  color?: Color;
  maxLine?: number;
};

export const getStyles = ({
  size,
  mqSizes,
  maxLine,
  color = 'mirage',
}: StyleProps) =>
  css(
    {
      ...getBreakStyle(maxLine),
      ...getTypography({ size, color }),
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
