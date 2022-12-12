import React, { useState, useCallback, useEffect } from 'react';

export type PointerPosition = {
  x: number;
  y: number;
};

export const usePointerPosition = (ref: React.RefObject<HTMLElement>) => {
  const [pointerPosition, setPointerPosition] = useState<PointerPosition>();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const elementRect = ref.current?.getBoundingClientRect();

      if (elementRect) {
        setPointerPosition({
          x: e.clientX - elementRect.x,
          y: e.pageY - elementRect.y,
        });
      }
    },
    [ref]
  );

  const handleMouseLeave = useCallback(() => setPointerPosition(undefined), []);

  useEffect(() => {
    const targetElm = ref.current;
    if (targetElm) {
      targetElm.addEventListener('mousemove', handleMouseMove);
      targetElm.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      targetElm?.removeEventListener('mousemove', handleMouseMove);
      targetElm?.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  return { pointerPosition };
};
