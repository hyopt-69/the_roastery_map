import React from 'react';

import { Path } from '@/app/constants/path';
import { Container } from '@/components/layouts/Container';
import { InternalLink } from '@/components/parts/InternalLink';
import { Label } from '@/components/parts/Label';

import { styles } from './styles';

import { NAV_LABELS, NAV_LIST } from '../navData';

type Props = {
  currentPath: Path;
};

export const DesktopLayout: React.FC<Props> = ({ currentPath }) => {
  return (
    <header css={styles.container}>
      <Container cssProp={styles.innerContainer}>
        {/* FIXME: Logoコンポーネント埋め込む。テキストとロゴ */}
        <Label size="s">THE ROASTERY MAP</Label>
        <nav css={styles.navWrapper}>
          {NAV_LIST.map((nav) => {
            const isCurrentPage = currentPath === nav;

            return (
              <InternalLink
                key={nav}
                path={nav}
                passHref={!isCurrentPage}
                size="xxs"
                color={isCurrentPage ? 'mirage' : 'tapa'}
              >
                {NAV_LABELS[nav]}
              </InternalLink>
            );
          })}
        </nav>
      </Container>
    </header>
  );
};
