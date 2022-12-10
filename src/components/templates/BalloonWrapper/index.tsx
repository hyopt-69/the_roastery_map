import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
} & StyleProps;

export const BalloonWrapper: React.FC<Props> = ({
  children,
  pointDirection,
  color,
}) => {
  const dynamicStyles = getStyles({ pointDirection, color });

  return (
    <div css={dynamicStyles.container}>
      <div css={dynamicStyles.content}>{children}</div>
      <div css={dynamicStyles.point} />
    </div>
  );
};
