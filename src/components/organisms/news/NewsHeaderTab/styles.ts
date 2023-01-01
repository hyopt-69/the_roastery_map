import { css } from '@emotion/react';

import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingInline: spaces.xs,
  }),
};
