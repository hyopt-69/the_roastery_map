import { css } from '@emotion/react';

import { Color } from '@/theme/colors';
import { FontSize, fontSizes } from '@/theme/fontSizes';
import { getFluidFontSize, mediaQuery } from '@/utils/responsive';
import { getTypography, Typography } from '@/utils/typography';

export type StyleProps = {
  size?: FontSize;
  mqSizes?: [FontSize, FontSize];
  color?: Color;
  hasUnderLine?: boolean;
} & Partial<Typography>;

export const getStyles = ({
  size,
  mqSizes,
  color = 'mirage',
  hasUnderLine = false,
  weight,
  lineHeight,
}: StyleProps) => {
  return css(
    {
      ...getTypography({
        color,
        size,
        weight,
        lineHeight,
      }),
      cursor: 'pointer',
      display: 'inline-flex',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textDecoration: hasUnderLine ? 'underline' : 'none',
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
};
