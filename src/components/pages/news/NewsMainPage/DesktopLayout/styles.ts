import { css } from '@emotion/react';

import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    zIndex: 1,
    flexDirection: 'column',

    backgroundColor: 'white',
  }),
  a: css({
    display: 'flex',
    flexDirection: 'column',
    paddingInline: 120,
    gap: spaces.l,
  }),
};
