import React from 'react';

import { MediaQueryElement } from '@/components/templates/MediaQueryElement';
import { Path } from '@/constants/paths';

import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

type Props = {
  currentPath: Path;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <MediaQueryElement
      mobile={<MobileLayout {...props} />}
      desktop={<DesktopLayout {...props} />}
    />
  );
};
