import React from 'react';

import { Path } from '@/app/constants/paths';
import { useResponsive } from '@/app/hooks/useResponsive';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

type Props = {
  currentPath: Path;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return <MobileLayout {...props} />;
  }
  return <DesktopLayout {...props} />;
};
