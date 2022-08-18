import React, { useLayoutEffect, useRef, useState } from 'react';

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
  const tooltipRef = useRef<React.ElementRef<'div'>>(null);

  const [isTargetHovered, setIsTargetHovered] = useState(false);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);

  useLayoutEffect(() => {
    const targetElm = targetRef.current;
    const mouseEnterHandler = () => setIsTargetHovered(true);
    const mouseLeaveHandler = () => setIsTargetHovered(false);

    targetElm?.addEventListener('mouseenter', mouseEnterHandler);
    targetElm?.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      targetElm?.removeEventListener('mouseover', mouseEnterHandler);
      targetElm?.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, [targetRef]);

  return (
    <div
      ref={tooltipRef}
      css={getStyles({
        revealFrom,
        isVisible: isTargetHovered || isTooltipHovered,
      })}
      onMouseEnter={() => setIsTooltipHovered(true)}
      onMouseLeave={() => setIsTooltipHovered(false)}
    >
      {children}
    </div>
  );
};
