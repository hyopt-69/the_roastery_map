import React from 'react';

import * as ICONS from '@/app/assets/icons';
import { Color, colors } from '@/app/theme/colors';

const Icons = {
  example: ICONS.Example,
} as const;

export type IconPattern = keyof typeof Icons;
type IconSize = 's' | 'm' | 'l';

type Props = {
  pattern: IconPattern;
  size?: IconSize;
  color?: Color;
};

const ICON_SIZE: Record<IconSize, string> = {
  s: '36px',
  m: '48px',
  l: '64px',
};

export const Icon: React.FC<Props> = ({
  pattern,
  size = 'm',
  color = 'vulcan',
}) => {
  const iconSize = ICON_SIZE[size];
  const iconColor = colors[color];
  const IconElement = Icons[pattern];

  return (
    <IconElement
      fill={iconColor}
      stroke={iconColor}
      width={iconSize}
      height={iconSize}
    />
  );
};
