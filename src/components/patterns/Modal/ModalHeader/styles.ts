import { css } from '@emotion/react';

import { colors } from '@/app/theme/colors';

const CLICKABLE_AREA_SIZE = 36;

export const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.transparent,
  }),
  closeButton: css({
    all: 'unset',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: CLICKABLE_AREA_SIZE,
    height: CLICKABLE_AREA_SIZE,
  }),
};
