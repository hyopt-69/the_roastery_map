import React from 'react';

import { IconPattern, ICONS } from '@/app/assets/icons';
import { Color, colors } from '@/app/theme/colors';

type IconSize = 's' | 'm' | 'l';

type Props = {
  pattern: IconPattern;
  size?: IconSize;
  fill?: Color;
  stroke?: Color;
};

const ICON_SIZE: Record<IconSize, number> = {
  s: 24,
  m: 36,
  l: 48,
};

export const Icon: React.FC<Props> = ({
  pattern,
  size = 'm',
  fill = 'mirage',
  stroke = 'transparent',
}) => {
  const iconSize = ICON_SIZE[size];
  const IconElement = ICONS[pattern];

  return (
    <IconElement
      fill={colors[fill]}
      stroke={colors[stroke]}
      width={iconSize}
      height={iconSize}
    />
  );
};
