import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';
import { getFluidFontSize } from '@/app/utils/styles/getFluidFontSize';
import { getTypography } from '@/app/utils/styles/getTypography';
import { mediaQuery } from '@/app/utils/styles/mediaQuery';

type BodySize = Extract<FontSize, 'l' | 'm' | 's' | 'xs' | 'xxs'>;

export type StyleProps = {
  size: BodySize;
  mqSizes?: [BodySize, BodySize];
  color?: Color;
};

export const getStyles = ({ size, mqSizes, color = 'mirage' }: StyleProps) =>
  css(
    {
      ...getTypography({ size, color }),
      whiteSpace: 'pre-wrap',
    },
    mediaQuery({
      fontSize: mqSizes && [
        fontSizes[mqSizes[0]],
        getFluidFontSize({ min: mqSizes[0], max: mqSizes[1] }),
      ],
    })
  );
