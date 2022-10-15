import { css } from '@emotion/react';

import { borderRadiuses } from '@/app/theme/borderRadius';
import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { spaces } from '@/app/theme/spaces';
import { getTypography } from '@/app/utils/typography';

export const styles = {
  formContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blackHaze,
    borderRadius: borderRadiuses.m,
    border: `solid ${borderWidths.l}px ${colors.blackHaze}`,
    height: 42,
    width: '100%',
    padding: `0 ${spaces.xs}px`,
    transitionDuration: durations.s,
    ':focus-within, :hover': {
      backgroundColor: colors.white,
    },
  }),
  inputWrapper: css({
    display: 'flex',
    alignItems: 'center',
    gap: spaces.xxs,
    width: '100%',

    input: {
      all: 'unset',
      width: '100%',
      ...getTypography({
        size: 'xs',
        color: 'mirage',
      }),
      '::placeholder': {
        color: colors.pumice,
      },
    },
  }),
  deleteBtn: css({
    all: 'unset',
    display: 'flex',
    cursor: 'pointer',

    svg: {
      transitionDuration: durations.s,
      ':hover': {
        fill: colors.mirage,
      },
    },
  }),
};
