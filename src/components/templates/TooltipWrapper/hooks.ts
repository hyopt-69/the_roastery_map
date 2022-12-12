import React, { useState, useEffect, useMemo } from 'react';

type HooksProps = {
  targetRef: React.RefObject<HTMLElement>;
};
export const useTooltipWrapper = ({ targetRef }: HooksProps) => {
  const [isTargetHovered, setIsTargetHovered] = useState(false);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false);

  const isVisibleTooltip = useMemo(
    () => isTargetHovered || isTooltipHovered,
    [isTargetHovered, isTooltipHovered]
  );

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

  return {
    isVisibleTooltip,
    setIsTooltipHovered,
  };
};
