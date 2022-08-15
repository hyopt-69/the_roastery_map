import React, { useCallback } from 'react';

import { Path } from '@/app/constants/path';
import { useResponsive } from '@/app/hooks/useResponsive';
import { InternalLink } from '@/components/parts/InternalLink';
import { SecondaryButton } from '@/components/parts/SecondaryButton';

import { NAV_LABELS, NAV_LIST } from './navData';
import { styles } from './styles';

import { Container } from '../Container';

type Props = {
  currentPath: Path;
};

export const Footer: React.FC<Props> = ({ currentPath }) => {
  const { isMobile } = useResponsive();

  const handleClick = useCallback(() => {
    if (isMobile) {
      // インスタに飛んでいく。
      return console.log('go to Instagram');
    }
    return console.log('open QR code');
  }, [isMobile]);

  return (
    <footer css={styles.container}>
      <Container cssProp={styles.innerContainer}>
        <SecondaryButton iconPattern="INSTAGRAM" size="m" onClick={handleClick}>
          follow me
        </SecondaryButton>
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
    </footer>
  );
};
