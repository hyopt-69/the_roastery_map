import React from 'react';

import { StyleProps, getStyles } from './styles';

type Props = {
  label?: string;
} & Omit<StyleProps, 'hasLabel'>;

export const Divider: React.FC<Props> = ({ label, ...styleProps }) => {
  const { container } = getStyles({ ...styleProps, hasLabel: !!label });

  return <p css={container}>{label}</p>;
};
