import { css } from '@emotion/react';

import { Color, colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import { spaces } from '@/app/theme/spaces';
import { getFluidFontSize } from '@/app/utils/styles/getFluidFontSize';
import { getTypography, Typography } from '@/app/utils/styles/getTypography';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

export type StyleProps = {
  size?: FontSize;
  mqSizes?: [FontSize, FontSize];
  color?: Color;
  hoveredColor?: Color;
  hasUnderLine?: boolean;
} & Partial<Typography>;

export const getStyles = ({
  size,
  mqSizes,
  color = 'mirage',
  hoveredColor = 'mirage',
  hasUnderLine = false,
  weight,
  lineHeight,
  letterSpacing,
  family,
}: StyleProps) => {
  return css(
    {
      ...getTypography({
        color,
        size,
        lineHeight,
        letterSpacing,
        weight,
        family,
      }),
      cursor: 'pointer',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textDecoration: hasUnderLine ? 'underline' : 'none',
      textUnderlineOffset: spaces.xxs,
      transitionDuration: durations.s,
      ':hover': {
        color: colors[hoveredColor],
      },
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
};
