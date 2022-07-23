---
to: src/components/<%= directory %>/<%= name %>/styled.ts
unless_exists: true
---
import { styled } from '@linaria/react';

export const Styled = {
  Example = styled.div`
    color: white;
    background-color: gold;
  `,
};
