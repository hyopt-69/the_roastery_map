import React, { useCallback, useState } from 'react';

import { InternalLink } from '@/components/atoms/InternalLink';
import { Label } from '@/components/atoms/Label';
import { SecondaryButton } from '@/components/atoms/SecondaryButton';
import { QRBalloon } from '@/components/molecules/Balloon/QRBalloon';
import { Container } from '@/components/templates/Container';
import { Path } from '@/constants/paths';
import { URLS } from '@/constants/urls';
import { useResponsive } from '@/hooks/useResponsive';

import { NAV_LABELS, NAV_LIST } from './navData';
import { getBalloonStyle, styles } from './styles';

type Props = {
  currentPath: Path;
};

export const Footer: React.FC<Props> = ({ currentPath }) => {
  const { isMobile } = useResponsive();
  const [isVisibleQR, setIsVisibleQR] = useState(false);

  const handleClick = useCallback(() => {
    if (isMobile) {
      return window.open(URLS.INSTAGRAM, '_blank');
    }
    return setIsVisibleQR((prev) => !prev);
  }, [isMobile]);

  return (
    <footer css={styles.container}>
      <Container cssProp={styles.innerContainer}>
        <div css={styles.buttonWrapper}>
          <div css={getBalloonStyle(isVisibleQR)}>
            <QRBalloon url={URLS.INSTAGRAM} />
          </div>
          <SecondaryButton iconPattern="INSTAGRAM" onClick={handleClick}>
            Follow Me !
          </SecondaryButton>
        </div>

        <div css={styles.linksWrapper}>
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
          <Label size="xxxs" color="pumice">
            © 2022 kana-chan. All rights reserved
          </Label>
        </div>
      </Container>
    </footer>
  );
};
