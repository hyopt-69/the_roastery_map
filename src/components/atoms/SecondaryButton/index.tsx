import React, { useMemo } from 'react';

import { IconPattern } from '@/assets/icons';
import { Color } from '@/theme/colors';
import { Icon } from '@/components/atoms/Icon';
import { Label } from '@/components/atoms/Label';

import { getButtonStyle, StyleProps, styles } from './styles';

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick' | 'disabled'>;

type Props = {
  children: string;
  iconPattern?: IconPattern;
} & ButtonProps &
  StyleProps;

export const SecondaryButton: React.FC<Props> = ({
  children,
  size,
  disabled,
  iconPattern,
  onClick,
}) => {
  const contentColor: Color = useMemo(() => {
    return disabled ? 'pumice' : 'white';
  }, [disabled]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      css={getButtonStyle({ size })}
    >
      <div css={styles.innerWrapper}>
        {!!iconPattern && (
          <Icon pattern={iconPattern} fill={contentColor} size="s" />
        )}
        <Label size="xs" color={contentColor}>
          {children}
        </Label>
      </div>
    </button>
  );
};
