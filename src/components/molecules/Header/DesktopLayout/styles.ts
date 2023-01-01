import { css } from '@emotion/react';

import { DEFAULT_HEADER_HEIGHT } from '@/constants/sizes';
import { MAX_WINDOW_WIDTH, MIN_WINDOW_WIDTH } from '@/theme/breakPoints';
import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';
import { getOpacifyColor } from '@/utils/colors';

export const styles = {
  container: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: getOpacifyColor('white', 'l'),
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  }),
  innerContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: DEFAULT_HEADER_HEIGHT.MEDIUM,
    width: '100%',
    minWidth: MIN_WINDOW_WIDTH,
    maxWidth: MAX_WINDOW_WIDTH,
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
