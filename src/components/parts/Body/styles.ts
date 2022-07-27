import { css } from '@emotion/react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';
import { getTypography } from '@/app/utils/styles/getTypography';

type BodySize = Extract<FontSize, 'l' | 'm' | 's' | 'xs' | 'xxs'>;

export type StyleProps = {
  size: BodySize;
  color?: Color;
};

export const getTextStyle = ({ size, color = 'vulcan' }: StyleProps) =>
  css({
    ...getTypography({ size, color }),
    whiteSpace: 'pre-wrap',
  });
