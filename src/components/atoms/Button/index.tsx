import React from 'react';

import { Example } from './styled';

type Props = {
  name: string;
};

export const Button: React.FC<Props> = ({ name }) => {
  return <Example>{name}</Example>;
};
