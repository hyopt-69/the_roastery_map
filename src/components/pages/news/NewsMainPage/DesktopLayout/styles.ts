import { css } from '@emotion/react';

import { MAX_WINDOW_WIDTH, MIN_WINDOW_WIDTH } from '@/theme/breakPoints';
import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.white,
  }),
  innerContainer: css({
    display: 'flex',
    flex: 1,
    maxWidth: MAX_WINDOW_WIDTH,
    minWidth: MIN_WINDOW_WIDTH,
    paddingInline: spaces.s,
  }),
  sideNavigationWrapper: css({
    display: 'flex',
    flexShrink: 3,
    width: 300,
    borderRight: `1px solid ${colors.blackHaze}`,
  }),
  rightContentsWrapper: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    flexShrink: 5,
  }),
  contentWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    paddingInline: spaces.s,
    paddingBlock: spaces.s,
    gap: spaces.m,
  }),
};
