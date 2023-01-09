import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { Path, PATHS } from '@/constants/paths';

export const useAppRouter = () => {
  const router = useRouter();

  const goTo = useCallback(
    (path: Path, slug?: string) => {
      const mainPath = PATHS[path];

      if (slug) {
        return router.push(`${mainPath}/${slug}`);
      }
      return router.push(mainPath);
    },
    [router]
  );

  return {
    goTo,
  };
};
