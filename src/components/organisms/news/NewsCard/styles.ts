import { css } from '@emotion/react';

import { borderRadiuses } from '@/theme/borderRadius';
import { spaces } from '@/theme/spaces';
import { mediaQuery } from '@/utils/responsive';

export const styles = {
  container: css({
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
    gap: spaces.s,
    padding: spaces.s,
  }),
  image: css(
    {
      height: '100%',
      maxWidth: '50%',
      borderRadius: borderRadiuses.s,
      objectFit: 'cover',
      aspectRatio: '3/2',
    },
    mediaQuery({
      height: [90, 160],
    })
  ),

  contentWrapper: css({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  upperContentWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    gap: spaces.xs,
  }),

  informationWrapper: css({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  authorInformation: css({
    display: 'flex',
    alignItems: 'center',
    gap: spaces.s,
  }),
};
