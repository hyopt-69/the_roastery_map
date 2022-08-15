import { css } from '@emotion/react';

import { MIN_WINDOW_WIDTH } from '@/app/theme/breakPoints';

export const styles = {
  container: css({
    position: 'relative',
    width: '100%',
    zIndex: 1,
    minWidth: MIN_WINDOW_WIDTH,
  }),
  headerWrapper: css({
    position: 'sticky',
    top: 0,
    width: '100%',
  }),
};
