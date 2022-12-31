import { css } from '@emotion/react';

import { borderRadiuses } from '@/theme/borderRadius';
import { spaces } from '@/theme/spaces';
import { mediaQuery } from '@/utils/responsive';

export const styles = {
  container: css(
    {
      display: 'flex',
      width: '100%',
      cursor: 'pointer',
    },
    mediaQuery({
      gap: [spaces.xs, spaces.s],
      padding: [spaces.xs, spaces.s],
    })
  ),
  image: css(
    {
      height: '100%',
      maxWidth: '50%',
      borderRadius: borderRadiuses.s,
      objectFit: 'cover',
    },
    mediaQuery({
      aspectRatio: ['1/1', '3/2'],
      height: [160, 280],
    })
  ),

  contentWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  textsWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    gap: spaces.xs,
  }),

  informationWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    gap: spaces.xs,
  }),
  tagWrapper: css({
    display: 'flex',
    gap: spaces.xs,
  }),
  authorInformation: css({
    display: 'flex',
    alignItems: 'center',
    gap: spaces.xs,
  }),
};
