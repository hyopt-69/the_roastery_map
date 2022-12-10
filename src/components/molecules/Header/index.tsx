import React from 'react';

import { Path } from '@/constants/paths';
import { useResponsive } from '@/hooks/useResponsive';

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
