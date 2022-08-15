import { css } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { colors } from '@/app/theme/colors';
import { spaces } from '@/app/theme/spaces';

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
