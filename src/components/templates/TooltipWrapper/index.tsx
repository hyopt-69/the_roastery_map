import React from 'react';

import { useTooltipWrapper } from './hooks';
import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
  targetRef: React.RefObject<HTMLElement>;
} & Omit<StyleProps, 'isVisible'>;

export const TooltipWrapper: React.FC<Props> = ({
  children,
  targetRef,
  revealFrom,
}) => {
  const { isVisibleTooltip, setIsTooltipHovered } = useTooltipWrapper({
    targetRef,
  });
  const { container } = getStyles({
    revealFrom,
    isVisible: isVisibleTooltip,
  });

  return (
    <div
      css={container}
      onMouseEnter={() => setIsTooltipHovered(true)}
      onMouseLeave={() => setIsTooltipHovered(false)}
    >
      {children}
    </div>
  );
};
