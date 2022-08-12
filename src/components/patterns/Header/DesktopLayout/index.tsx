import NextLink from 'next/link';
import React from 'react';

import { Path, PATHS } from '@/app/constants/path';
import { Label } from '@/components/parts/Label';
import { Link } from '@/components/parts/Link';

import { styles } from './styles';

type Props = {
  currentPath: Path;
};

export const DesktopLayout: React.FC<Props> = ({ currentPath }) => {
  return (
    <header css={styles.container}>
      {/* FIXME: Logoコンポーネント埋め込む */}
      <Label size="s">THE ROASTERY MAP</Label>
      <nav css={styles.navWrapper}>
        {Object.entries(PATHS).map(([name, route]) => {
          const isCurrentPage = currentPath === name;

          return (
            <NextLink passHref={!isCurrentPage} href={route}>
              <Link
                size="xxs"
                color={isCurrentPage ? 'mirage' : 'tapa'}
                hoveredColor="mirage"
              >
                {name}
              </Link>
            </NextLink>
          );
        })}
      </nav>
    </header>
  );
};
