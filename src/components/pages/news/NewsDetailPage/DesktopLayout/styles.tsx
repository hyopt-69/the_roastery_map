import { css } from '@emotion/react';

import { spaces } from '@/theme/spaces';

const MAX_BLOG_CONTENT_WIDTH = 650;

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  contentWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: MAX_BLOG_CONTENT_WIDTH,
    width: '100%',
    gap: spaces.xl,
  }),
};
