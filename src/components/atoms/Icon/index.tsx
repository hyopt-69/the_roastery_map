import { styled } from '@linaria/react';
import React, { useCallback } from 'react';

import * as ICONS from '@/app/assets/icons';
import { Color, colors } from '@/app/theme/colors';
import { durations } from '@/app/theme/durations';
import { spaces } from '@/app/theme/space';

const Icons = {
  example: ICONS.Example,
} as const;

export type IconPattern = keyof typeof Icons;
type IconSize = 's' | 'm' | 'l';

type Props = {
  pattern: IconPattern;
  size?: IconSize;
  color?: Color;
  isDisabled?: boolean;
  onClick: React.ComponentProps<'button'>['onClick'];
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
  onClick,
  isDisabled,
}) => {
  const getIconElement = useCallback(() => {
    const IconElement = Icons[pattern];
    const iconSize = ICON_SIZE[size];
    const iconColor = isDisabled ? colors.pumice : colors[color];

    return (
      <IconElement
        fill={iconColor}
        stroke={iconColor}
        width={iconSize}
        height={iconSize}
      />
    );
  }, [color, isDisabled, pattern, size]);

  if (onClick) {
    return (
      <Styled.ClickableWrapper onClick={onClick} disabled={isDisabled}>
        {getIconElement()}
      </Styled.ClickableWrapper>
    );
  }

  return (
    <Styled.UnClickableWrapper>{getIconElement()}</Styled.UnClickableWrapper>
  );
};

const Styled = {
  ClickableWrapper: styled.button`
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    border-radius: 50%;
    background-color: ${colors.transparent};
    padding: ${spaces.xs};
    transition-duration: ${durations.s};
    :enabled {
      cursor: pointer;
      :hover {
        background-color: ${colors.gallery};
      }
    }
    :disabled {
      cursor: not-allowed;
    }
  `,
  UnClickableWrapper: styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    background-color: ${colors.transparent};
    padding: ${spaces.xs};
  `,
};
