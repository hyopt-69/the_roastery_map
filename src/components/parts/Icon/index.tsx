import { css } from '@emotion/react';
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
  s: 24,
  m: 36,
  l: 48,
};

export const Icon: React.FC<Props> = ({
  pattern,
  size = 'm',
  color = 'mirage',
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
