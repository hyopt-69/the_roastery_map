import { css } from '@emotion/react';

import { Color } from '@/theme/colors';
import { FontSize, fontSizes } from '@/theme/fontSizes';
import {
  getBreakStyle,
  getFluidFontSize,
  mediaQuery,
} from '@/utils/responsive';
import { getTypography } from '@/utils/typography';

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
}: StyleProps) => {
  const container = css(
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

  return { container };
};
