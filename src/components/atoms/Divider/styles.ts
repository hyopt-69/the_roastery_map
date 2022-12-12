import { css, CSSObject } from '@emotion/react';

import { BorderWidth, borderWidths } from '@/theme/borderWidths';
import { Color, colors } from '@/theme/colors';
import { FontSize } from '@/theme/fontSizes';
import { spaces } from '@/theme/spaces';
import { getTypography } from '@/utils/typography';

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

  const container = css({
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

  return { container };
};
