import React from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
} & StyleProps;

export const Balloon: React.FC<Props> = ({
  children,
  pointDirection,
  pointPosition,
  color,
}) => {
  const dynamicStyles = getStyles({ pointDirection, pointPosition, color });

  return (
    <div css={dynamicStyles.container}>
      <div css={dynamicStyles.point} />
      <div css={dynamicStyles.content}>{children}</div>
    </div>
  );
};
