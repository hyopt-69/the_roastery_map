import { css } from '@emotion/react';

import { DEFAULT_HEADER_HEIGHT } from '@/constants/sizes';
import { MIN_WINDOW_WIDTH } from '@/theme/breakPoints';
import { colors } from '@/theme/colors';
import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
    minWidth: MIN_WINDOW_WIDTH,
  }),
  tabWrapper: css({
    position: 'sticky',
    width: '100%',
    zIndex: 1,
    top: DEFAULT_HEADER_HEIGHT.SMALL,
  }),
  contentWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    paddingInline: spaces.s,
    paddingBlock: spaces.s,
    gap: spaces.m,
  }),
};
