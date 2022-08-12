import React from 'react';

import { Path, PATHS } from '@/app/constants/path';
import { Label } from '@/components/parts/Label';
import { TertiaryButton } from '@/components/parts/TertiaryButton';

import { styles } from './styles';

type Props = {
  currentPath: Path;
};

export const DesktopLayout: React.FC<Props> = ({ currentPath }) => {
  return (
    <header css={styles.container}>
      {/* FIXME: Logoコンポーネント埋め込む */}
      <Label size="m">THE ROASTERY MAP</Label>
      <nav css={styles.navWrapper}>
        {Object.entries(PATHS).map(([name, route]) => (
          // TextButtonを作成し、VercelのHeaderみたいにする。
          <TertiaryButton>{name}</TertiaryButton>
        ))}
      </nav>
    </header>
  );
};
