---
to: src/components/<%= directory %>/<%= name %>/index.tsx
unless_exists: true
---
import { styled } from '@linaria/react';
import React from 'react';


type Props = {
  chldren: string;
};

export const <%= name %>: React.FC<Props> = ({ children }) => {
  return <Styled.Example>{children}</Styled.Example>;
};

export const Styled = {
  Example : styled.div`
    color: white;
    background-color: gold;
  `,
};