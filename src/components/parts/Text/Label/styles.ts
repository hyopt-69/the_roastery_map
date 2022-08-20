import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import { getFluidFontSize } from '@/app/utils/styles/getFluidFontSize';
import { getTypography, Typography } from '@/app/utils/styles/getTypography';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

export type StyleProps = {
  size?: FontSize;
  mqSizes?: [FontSize, FontSize];
  color?: Color;
} & Partial<Typography>;

export const getStyles = ({
  size,
  mqSizes,
  color = 'mirage',
  weight,
}: StyleProps) => {
  return css(
    {
      ...getTypography({
        size,
        color,
        weight,
      }),
      display: 'inline-block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      verticalAlign: 'middle',
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
};
