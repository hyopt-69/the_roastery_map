import { BorderRadius, borderRadiuses } from '@/app/theme/borderRadius';
import { spaces } from '@/app/theme/spaces';
import { css } from '@emotion/react';

export const styles = {
  container: css({
    display: 'flex',
    padding: spaces.l,
    columnGap: spaces.l,
  }),
  imgContents: css({
    width: '35%',
  }),
  img: css({
    width: '350px',
    height: '250px',
    borderRadius: borderRadiuses.xl,
    margin: '0 auto',
  }),
  textContents: css({
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
  }),
  title: css({
    width: '700px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  body: css({
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
  }),
  tags: css({
    display: 'flex',
    columnGap: spaces.xs,
  }),
  label: css({
    columnGap: spaces.s,
    display: 'flex',
    marginTop: 'auto',
  }),
  createdAt: css({
    marginLeft: 'auto',
  }),
};
