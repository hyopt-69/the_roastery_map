import { styled } from '@linaria/react';

import { colors } from '@/app/theme/colors';
import { shadows } from '@/app/theme/shadow';
import { getOpacifyColor } from '@/app/utils/styles/getOpacifyColor';

export const Example = styled.div`
  color: black;
  background-color: ${colors.abbey};
  box-shadow: ${shadows.s};
  :hover {
    box-shadow: ${shadows.l};
    background-color: ${getOpacifyColor('abbey', 'm')};
  }
`;
