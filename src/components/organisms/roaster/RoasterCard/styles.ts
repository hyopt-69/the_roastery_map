import { css } from '@emotion/react';

import { borderRadiuses } from '@/theme/borderRadius';
import { scales } from '@/theme/scales';
import { spaces } from '@/theme/spaces';
import { mediaQuery } from '@/utils/responsive';

export const styles = {
  container: css(
    {
      display: 'flex',
      flexDirection: 'column',
      gap: spaces.xs,
      cursor: 'pointer',
    },
    mediaQuery({
      padding: [spaces.xs, spaces.s],
    })
  ),
  thumbSection: css({
    display: 'flex',
    aspectRatio: '1',
    overflow: 'hidden',
    borderRadius: borderRadiuses.m,
    img: {
      objectFit: 'cover',
    },
  }),
  informationSection: css({
    display: 'flex',
    flexDirection: 'column',
    gap: spaces.xs,
  }),
  upperInfoWrapper: css({
    display: 'flex',
  }),
  favoriteButtonWrapper: css({
    all: 'unset',
    display: 'flex',
    height: 'fit-content',
    paddingLeft: spaces.xs,
    paddingBottom: spaces.xs,
    cursor: 'pointer',
    ':active': {
      transform: scales.smaller,
    },
  }),
  namesWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  }),
};
