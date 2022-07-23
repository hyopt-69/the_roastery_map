import { styled } from '@linaria/react';

import { duration } from '@/app/theme/duration';
import { shadow } from '@/app/theme/shadow';

export const Example = styled.div`
  color: white;
  background-color: white;
  transition-duration: ${duration.l};
  box-shadow: ${shadow.s};
  :hover {
    box-shadow: ${shadow.l};
  }
`;
