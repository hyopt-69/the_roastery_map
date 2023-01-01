import { css } from '@emotion/react';

import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';
import { mediaQuery } from '@/utils/responsive';

export const styles = {
  container: css(
    {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      background: `radial-gradient(circle at bottom left, ${colors.blackHaze}, ${colors.transparent} 150px)`,
      paddingInline: spaces.s,
      gap: spaces.xxs,
    },
    mediaQuery({
      paddingBlock: [spaces.l, spaces.xxl],
    })
  ),
};
