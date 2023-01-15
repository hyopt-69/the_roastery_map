import { css } from '@emotion/react';

import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spaces.l,
    paddingBottom: spaces.l,
  }),
  newsWrapper: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spaces.s,
  }),
};
