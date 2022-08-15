import NextLink from 'next/link';
import React, { useState } from 'react';

import { Path, PATHS } from '@/app/constants/path';
import { Icon } from '@/components/parts/Icon';
import { Label } from '@/components/parts/Label';
import { Link } from '@/components/parts/Link';

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
      {/* FIXME: Logoコンポーネント埋め込む・ロゴだけ。 */}
      <Label size="s">THE ROASTERY MAP</Label>

      <nav css={dynamicStyles.navWrapper}>
        {NAV_LIST.map((nav) => {
          const isCurrentPage = currentPath === nav;

          return (
            <NextLink passHref={!isCurrentPage} href={PATHS[nav]}>
              <Link size="xxs" color={isCurrentPage ? 'mirage' : 'tapa'}>
                <Icon pattern={NAV_ICONS[nav]} size="s" stroke="tapa" />
              </Link>
            </NextLink>
          );
        })}
        <button
          css={styles.detailBtn}
          type="button"
          onClick={() => setIsVisibleNav((prev) => !prev)}
        >
          <Icon pattern={isVisibleNav ? 'X' : 'MENU'} size="s" stroke="tapa" />
        </button>
      </nav>
    </header>
  );
};
