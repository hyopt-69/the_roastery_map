import React from 'react';

import { Path } from '@/app/constants/path';
import { useResponsive } from '@/app/hooks/useResponsive';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

type Props = {
  currentPath: Path;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return <MobileLayout />;
  }
  return <DesktopLayout {...props} />;
};
