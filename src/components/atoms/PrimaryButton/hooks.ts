import { useRef } from 'react';

import { usePointerPosition } from '@/hooks/usePointerPosition';
import { Color } from '@/theme/colors';

export type PointerPosition = {
  x: number;
  y: number;
};

export const getContentColor = (isDisabled: boolean): Color => {
  return isDisabled ? 'pumice' : 'white';
};

export const usePrimaryButton = () => {
  const buttonRef = useRef<React.ElementRef<'button'>>(null);
  const { pointerPosition } = usePointerPosition(buttonRef);

  return { pointerPosition, buttonRef };
};
