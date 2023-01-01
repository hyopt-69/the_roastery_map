import { css } from '@emotion/react';

import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `radial-gradient(circle at bottom left, ${colors.blackHaze} 10%, ${colors.transparent} 60%)`,
    paddingInline: spaces.s,
    paddingBlock: spaces.l,
    gap: spaces.xxs,
  }),
};
