import { css } from '@emotion/react';

import { Color } from '@/theme/colors';
import { FontSize, fontSizes } from '@/theme/fontSizes';
import {
  getBreakStyle,
  getFluidFontSize,
  mediaQuery,
} from '@/utils/responsive';
import { getTypography, Typography } from '@/utils/typography';

type BodySize = Extract<FontSize, 'l' | 'm' | 's' | 'xs' | 'xxs' | 'xxxs'>;

type BodyBaseProps = {
  color?: Color;
  maxLine?: number;
} & Partial<Typography>;

type StaticBodyProps = {
  size: BodySize;
  mqSizes?: never;
} & BodyBaseProps;

type DynamicBodyProps = {
  size?: never;
  mqSizes: [BodySize, BodySize];
} & BodyBaseProps;

export type StyleProps = StaticBodyProps | DynamicBodyProps;

export const getStyles = ({
  size,
  mqSizes,
  maxLine,
  color = 'mirage',
  lineHeight,
}: StyleProps) => {
  const container = css(
    {
      ...getBreakStyle(maxLine),
      ...getTypography({ size, color, lineHeight }),
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
