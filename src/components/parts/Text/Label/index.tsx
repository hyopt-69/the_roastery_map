// import { styled } from '@linaria/react';
import React from 'react';

import { Color } from '@/app/theme/colors';
import { FontSize } from '@/app/theme/fontSizes';

// import { Text, Typography } from '..';

type Props = {
  children: string;
  size: FontSize;
  color?: Color;
};

// const getTypographyDetails = (size: FontSize): Typography => {
//   switch (size) {
//     case 'xxs':
//     case 'xs':
//     case 's':
//     case 'm':
//       return {
//         lineHeight: 'normal',
//         letterSpacing: 'normal',
//         weight: 'normal',
//         family: 'normal',
//       };
//     case 'l':
//     case 'xl':
//     case 'xxl':
//       return {
//         lineHeight: 'wide',
//         letterSpacing: 'wide',
//         weight: 'bold',
//         family: 'bold',
//       };
//     default:
//       return {
//         lineHeight: 'normal',
//         letterSpacing: 'normal',
//         weight: 'normal',
//         family: 'normal',
//       };
//   }
// };

export const Label: React.FC<Props> = ({
  children,
  size,
  color = 'vulcan',
}) => {
  // const typography = getTypographyDetails(size);

  return (
    <p>らべる</p>
    // <Styled.Label color={color} size={size} {...typography}>
    //   {children}
    // </Styled.Label>
  );
};

// const Styled = {
//   Label: styled(Text)`
//     display: 'inline-block';
//     white-space: 'no-wrap';
//     overflow: hidden;
//     text-overflow: ellipsis;
//   `,
// };
