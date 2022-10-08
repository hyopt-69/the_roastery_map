import React, { useState } from 'react';

import { Path } from '@/app/constants/paths';
import { Container } from '@/components/layouts/Container';
import { Icon } from '@/components/parts/Image/Icon';
import { InternalLink } from '@/components/parts/Text/InternalLink';
import { Label } from '@/components/parts/Text/Label';

import { styles, getStyles } from './styles';

import { NAV_ICONS, NAV_LIST } from '../navData';

type Props = {
  currentPath: Path;
};

export const MobileLayout: React.FC<Props> = ({ currentPath }) => {
  const [isVisibleNav, setIsVisibleNav] = useState(false);
  const dynamicStyles = getStyles(isVisibleNav);

  return (
    <header css={styles.container}>
      <Container cssProp={styles.innerContainer}>
        {/* FIXME: Logoコンポーネント埋め込む・ロゴだけ。 */}
        <Label size="s">THE ROASTERY MAP</Label>

        <nav css={dynamicStyles.navWrapper}>
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
                <Icon
                  pattern={NAV_ICONS[nav]}
                  size="s"
                  stroke={isCurrentPage ? 'mirage' : 'tapa'}
                />
              </InternalLink>
            );
          })}
          <button
            css={styles.detailBtn}
            type="button"
            onClick={() => setIsVisibleNav((prev) => !prev)}
          >
            <Icon
              pattern={isVisibleNav ? 'X' : 'MENU'}
              size="s"
              stroke="tapa"
            />
          </button>
        </nav>
      </Container>
    </header>
  );
};
