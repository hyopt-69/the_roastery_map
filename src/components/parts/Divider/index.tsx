import React from 'react';

import { StyleProps, getStyles } from './styles';

type Props = {
  label?: string;
} & Omit<StyleProps, 'hasLabel'>;

export const Divider: React.FC<Props> = ({ label, ...styleProps }) => {
  return <p css={getStyles({ ...styleProps, hasLabel: !!label })}>{label}</p>;
};
