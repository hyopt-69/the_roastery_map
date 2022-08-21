import React, { useMemo } from 'react';

import { IconPattern } from '@/app/assets/icons';
import { Color } from '@/app/theme/colors';
import { Icon } from '@/components/parts/Image/Icon';
import { Label } from '@/components/parts/Text/Label';

import { styles, getStyles, StyleProps } from './styles';

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick' | 'disabled'>;

type Props = {
  children: string;
  iconPattern?: IconPattern;
} & ButtonProps &
  StyleProps;

export const TertiaryButton: React.FC<Props> = ({
  children,
  disabled,
  iconPattern,
  onClick,
  size,
  isOutlined,
}) => {
  const contentColor = useMemo((): Color => {
    return disabled ? 'tapa' : 'mirage';
  }, [disabled]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      css={getStyles({ size, isOutlined })}
    >
      <div css={styles.innerWrapper}>
        {!!iconPattern && (
          <Icon pattern={iconPattern} stroke={contentColor} size="s" />
        )}
        <Label size="xs" color={contentColor}>
          {children}
        </Label>
      </div>
    </button>
  );
};
