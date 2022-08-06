import React, { useMemo } from 'react';

import { IconPattern } from '@/app/assets/icons';
import { Color } from '@/app/theme/colors';
import { Icon } from '@/components/parts/Icon';
import { Label } from '@/components/parts/Label';

import { getButtonStyle, ButtonSize, styles } from './styles';

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick' | 'disabled'>;

type Props = {
  label: string;
  size: ButtonSize;
  iconPattern?: IconPattern;
} & ButtonProps;

export const SecondaryButton: React.FC<Props> = ({
  label,
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
          <Icon pattern={iconPattern} color={contentColor} size="s" />
        )}
        <Label size="s" color={contentColor}>
          {label}
        </Label>
      </div>
    </button>
  );
};
