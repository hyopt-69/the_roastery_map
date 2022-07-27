import React from 'react';

import { IconPattern, ICONS } from '@/app/assets/icons';
import { Color, colors } from '@/app/theme/colors';

type IconSize = 's' | 'm' | 'l';

type Props = {
  pattern: IconPattern;
  size?: IconSize;
  color?: Color;
};

const ICON_SIZE: Record<IconSize, number> = {
  s: 36,
  m: 48,
  l: 64,
};

export const Icon: React.FC<Props> = ({
  pattern,
  size = 'm',
  color = 'vulcan',
}) => {
  const iconSize = ICON_SIZE[size];
  const iconColor = colors[color];
  const IconElement = ICONS[pattern];

  return (
    <IconElement
      fill={iconColor}
      stroke={iconColor}
      width={iconSize}
      height={iconSize}
    />
  );
};
