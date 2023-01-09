import { css } from '@emotion/react';

import { mediaQuery } from '@/utils/responsive';

export const styles = {
  mobileElementWrapper: css(
    mediaQuery({
      display: ['inherit', 'none'],
    })
  ),
  desktopElementWrapper: css(
    mediaQuery({
      display: ['none', 'inherit'],
    })
  ),
};
