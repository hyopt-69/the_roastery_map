import React from 'react';

import { AVATARS } from '@/assets/images';

import { getStyles, StyleProps } from './styles';

type Props = {
  src?: string;
} & StyleProps;

export const Avatar: React.FC<Props> = ({ src = AVATARS.DEFAULT, size }) => {
  const { container } = getStyles({ size });

  return (
    <div css={container}>
      <img src={src} />
    </div>
  );
};
