import React, { useEffect, useState } from 'react';

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
  const [isTargetHovered, setIsTargetHovered] = useState(false);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);

  useEffect(() => {
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
