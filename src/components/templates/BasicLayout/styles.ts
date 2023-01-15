import { css } from '@emotion/react';

import { MIN_WINDOW_WIDTH } from '@/theme/breakPoints';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    minHeight: '100svh',
    zIndex: 1,
    minWidth: MIN_WINDOW_WIDTH,
  }),
  headerWrapper: css({
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1,
  }),
  contentWrapper: css({
    display: 'flex',
    flexGrow: 1,
  }),
};
