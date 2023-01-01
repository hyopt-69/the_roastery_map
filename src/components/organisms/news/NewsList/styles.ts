import { css } from '@emotion/react';

import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
    gap: spaces.s,
  }),
};
