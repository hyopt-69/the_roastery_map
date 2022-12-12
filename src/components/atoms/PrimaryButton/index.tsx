import React from 'react';

import { IconPattern } from '@/assets/icons';
import { Icon } from '@/components/atoms/Icon';
import { Label } from '@/components/atoms/Label';

import { getContentColor, usePrimaryButton } from './hooks';
import { ButtonSize, getStyles } from './styles';

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick' | 'disabled'>;

type Props = {
  children: string;
  size?: ButtonSize;
  iconPattern?: IconPattern;
} & ButtonProps;

export const PrimaryButton: React.FC<Props> = ({
  children,
  size,
  disabled,
  iconPattern,
  onClick,
}) => {
  const { buttonRef, pointerPosition } = usePrimaryButton();
  const { container, innerContainer } = getStyles({ size, pointerPosition });
  const contentColor = getContentColor(!!disabled);

  return (
    <button
      css={container}
      ref={buttonRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <div css={innerContainer}>
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
