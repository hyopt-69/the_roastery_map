import NextLink from 'next/link';
import React from 'react';

import { Path, PATHS } from '@/app/constants/path';
import { Label } from '@/components/parts/Label';
import { Link } from '@/components/parts/Link';

import { styles } from './styles';

import { NAV_LABELS, NAV_LIST } from '../navData';

type Props = {
  currentPath: Path;
};

export const DesktopLayout: React.FC<Props> = ({ currentPath }) => {
  return (
    <header css={styles.container}>
      {/* FIXME: Logoコンポーネント埋め込む。テキストとロゴ */}
      <Label size="s">THE ROASTERY MAP</Label>
      <nav css={styles.navWrapper}>
        {NAV_LIST.map((nav) => {
          const isCurrentPage = currentPath === nav;

          return (
            <NextLink passHref={!isCurrentPage} href={PATHS[nav]}>
              <Link size="xxs" color={isCurrentPage ? 'mirage' : 'tapa'}>
                {NAV_LABELS[nav]}
              </Link>
            </NextLink>
          );
        })}
      </nav>
    </header>
  );
};
