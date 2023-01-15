import { css } from '@emotion/react';

import { spaces } from '@/theme/spaces';

export const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: spaces.m,
    paddingInline: spaces.xs,
    paddingBlock: spaces.s,
  }),
  textsWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: spaces.xxs,
  }),
};
