import React, { useRef, useState, useCallback, useMemo } from 'react';

import { IconPattern } from '@/assets/icons';
import { Color } from '@/theme/colors';
import { Icon } from '@/components/atoms/Icon';
import { Label } from '@/components/atoms/Label';

import { getButtonStyle, ButtonSize, PointerPosition, styles } from './styles';

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
  const [pointerPosition, setPointerPosition] = useState<PointerPosition>();
  const buttonRef = useRef<React.ElementRef<'button'>>(null);

  const contentColor: Color = useMemo(() => {
    return disabled ? 'pumice' : 'white';
  }, [disabled]);

  const handleMouseMove: React.MouseEventHandler = useCallback((e) => {
    const buttonRect = buttonRef.current?.getBoundingClientRect();

    if (buttonRect) {
      setPointerPosition({
        x: e.clientX - buttonRect.x,
        y: e.pageY - buttonRect.y,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => setPointerPosition(undefined), []);

  return (
    <button
      type="button"
      ref={buttonRef}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      css={getButtonStyle({ size, pointerPosition })}
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
