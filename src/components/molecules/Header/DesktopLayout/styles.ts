import { css } from '@emotion/react';

import { DEFAULT_HEADER_HEIGHT } from '@/constants/sizes';
import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colors.white,
  }),
  innerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: DEFAULT_HEADER_HEIGHT.MEDIUM,
    paddingInline: spaces.m,
  }),
  navWrapper: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spaces.s,

    'a:hover': {
      color: colors.mirage,
    },
  }),
};
