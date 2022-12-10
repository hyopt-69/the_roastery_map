import React from 'react';

import { InternalLink } from '@/components/atoms/InternalLink';
import { Label } from '@/components/atoms/Label';
import { Container } from '@/components/templates/Container';
import { Path } from '@/constants/paths';

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
