import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import { getFluidFontSize, mediaQuery } from '@/app/utils/responsive';
import { getTypography, Typography } from '@/app/utils/typography';

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
}: StyleProps) => {
  return css(
    {
      ...getTypography({
        color,
        size,
        weight,
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
