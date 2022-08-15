import { css } from '@emotion/react';

import { MAX_WINDOW_WIDTH, MIN_WINDOW_WIDTH } from '@/app/theme/breakPoints';

export const styles = css({
  backgroundColor: 'inherit',
  width: '100%',
  minWidth: MIN_WINDOW_WIDTH,
  maxWidth: MAX_WINDOW_WIDTH,
});
