import { useState, useMemo, useCallback, useLayoutEffect } from 'react';

import { breakPoints } from '@/theme/breakPoints';

type Dimension = {
  width: number;
  height: number;
};

// FIXME: リロードでチラつく。cssでのレスポンシブに切り替えた方がよさそうかも....だるい。
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

  useLayoutEffect(() => {
    handleUpdateDimension();

    window.addEventListener('resize', handleUpdateDimension);
    return () => window.removeEventListener('resize', handleUpdateDimension);
  }, [handleUpdateDimension]);

  return {
    dimension,
    isMobile,
  };
};
