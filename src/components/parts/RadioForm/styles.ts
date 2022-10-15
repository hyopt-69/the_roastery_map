import { css } from '@emotion/react';

import { DEFAULT_BUTTON_HEIGHT } from '@/app/constants/sizes';
import { borderWidths } from '@/app/theme/borderWidths';
import { colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { opacities } from '@/app/theme/opacities';
import { scales } from '@/app/theme/scales';
import { spaces } from '@/app/theme/spaces';
import { getHorizontalSpace } from '@/app/utils/spaces';

export const styles = {
  container: css({
    all: 'unset',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: spaces.xs,
  }),
  radioItem: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: getHorizontalSpace(spaces.s),
    height: DEFAULT_BUTTON_HEIGHT.MEDIUM,
    borderRadius: DEFAULT_BUTTON_HEIGHT.MEDIUM / 2,
    transitionDuration: durations.s,
    borderStyle: 'solid',
    borderWidth: borderWidths.m,

    ':has(input:checked)': {
      backgroundColor: colors.mirage,
      borderColor: colors.mirage,
      transform: scales.bigger,
    },
    ':has(input:not(:checked))': {
      backgroundColor: colors.white,
      borderColor: colors.pumice,
    },
    ':has(input:enabled)': {
      cursor: 'pointer',
      ':hover': {
        borderColor: colors.mirage,
      },
      ':active': {
        transform: scales.smaller,
      },
    },
    ':has(input:disabled)': {
      cursor: 'not-allowed',
    },
    input: {
      // FIXME: Tabキーで移動できるようにする。
      position: 'absolute',
      zIndex: -1,
      opacity: opacities.none,
    },
  }),
};
