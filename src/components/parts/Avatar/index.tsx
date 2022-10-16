import React from 'react';

import { AVATARS } from '@/app/assets/images';

import { getStyles, StyleProps } from './styles';

type Props = {
  src?: string;
} & StyleProps;

export const Avatar: React.FC<Props> = ({ src = AVATARS.DEFAULT, size }) => {
  const styles = getStyles({ size });

  return (
    <div css={styles.container}>
      <img src={src} />
    </div>
  );
};
