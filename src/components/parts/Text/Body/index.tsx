// import { styled } from '@linaria/react';
import React from 'react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';

// import { Text } from '..';

type BodySize = Extract<FontSize, 'l' | 'm' | 's' | 'xs' | 'xxs'>;

type Props = {
  children: string;
  size: BodySize;
  color?: Color;
};

export const Body: React.FC<Props> = ({ children, size, color = 'vulcan' }) => {
  return (
    <p>ぼでぃ</p>
    // <Styled.Body color={color} size={size}>
    //   {children}
    // </Styled.Body>
  );
};

// const Styled = {
//   Body: styled(Text)`
//     display: 'inline-block';
//     white-space: 'pre-wrap';
//   `,
// };
