import { css, CSSObject } from '@emotion/react';

import { BorderWidth, borderWidths } from '@/app/theme/borderWidths';
import { Color, colors } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';
import { spaces } from '@/app/theme/spaces';
import { getTypography } from '@/app/utils/typography';

export type StyleProps = {
  borderWidth?: BorderWidth;
  borderColor?: Color;
  labelColor?: Color;
  labelSize?: FontSize;
  hasLabel?: boolean;
};

export const getStyles = ({
  borderWidth = 'm',
  borderColor = 'pumice',
  labelColor = 'mirage',
  labelSize = 'xxxs',
  hasLabel,
}: StyleProps) => {
  const dividerStyle: CSSObject = {
    content: `""`,
    flexGrow: 1,
    height: borderWidths[borderWidth],
    borderRadius: borderWidths[borderWidth] / 2,
    backgroundColor: colors[borderColor],
  };

  return css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    ...getTypography({ size: labelSize, color: labelColor }),

    '::before': {
      ...dividerStyle,
      ...(hasLabel && {
        marginRight: spaces.xxs,
      }),
    },
    '::after': {
      ...dividerStyle,
      ...(hasLabel && {
        marginLeft: spaces.xxs,
      }),
    },
  });
};
