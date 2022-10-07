import { css } from '@emotion/react';
import { colors } from '@/app/theme/colors';
import { fontSizes } from '@/app/theme/fontSizes';

export const styles = {
  image: css({
    float: 'left',
    width: '50%',
    height: '100%',
  }),
  container: css({
    float: 'right',
    width: '50%',
    height: '100%',
  }),
  contents: css({
    textAlign: 'left',
    overfloWrap: 'breakWord',
    fontSize: fontSizes.xxxs,
    color: colors.valencia,
  }),
  tags: css({
    display: 'flex',
  }),
  authorInfo: css({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  }),
  createAt: css({
    textAlign: 'right',
  }),
};
