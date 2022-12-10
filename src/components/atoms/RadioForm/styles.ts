import { css } from '@emotion/react';

import { DEFAULT_BUTTON_HEIGHT } from '@/constants/sizes';
import { borderWidths } from '@/theme/borderWidths';
import { colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { opacities } from '@/theme/opacities';
import { scales } from '@/theme/scales';
import { spaces } from '@/theme/spaces';
import { getHorizontalSpace } from '@/utils/spaces';

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
