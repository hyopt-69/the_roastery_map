import { css } from '@emotion/react';

import { borderRadiuses } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: borderRadiuses.s,
    padding: spaces.s,
    overflow: 'hidden',
    width: 300,
  }),
};
