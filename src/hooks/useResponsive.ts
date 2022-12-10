import { useState, useEffect, useMemo, useCallback } from 'react';

import { breakPoints } from '@/theme/breakPoints';

type Dimension = {
  width: number;
  height: number;
};

export const useResponsive = () => {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const handleUpdateDimension = useCallback(() => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  }, []);

  const isMobile = useMemo(
    () => dimension.width <= breakPoints.mobile,
    [dimension.width]
  );

  useEffect(() => {
    handleUpdateDimension();

    window.addEventListener('resize', handleUpdateDimension);
    return () => window.removeEventListener('resize', handleUpdateDimension);
  }, [handleUpdateDimension]);

  return {
    dimension,
    isMobile,
  };
};
