import React, { useMemo } from 'react';

import { Icon } from '@/components/atoms/Icon';
import { Label } from '@/components/atoms/Label';
import { Title } from '@/components/atoms/Title';
import { CardWrapper } from '@/components/templates/CardWrapper';
import { PREFECTURES } from '@/constants/prefectures';
import { Roaster } from '@/domains/roaster/types';
import { useResponsive } from '@/hooks/useResponsive';

import { styles } from './styles';

type Props = {
  onClick: () => void;
  onClickFavorite: () => void;
} & Roaster;

export const RoasterCard: React.FC<Props> = ({
  name,
  nameKatakana,
  address,
  thumbImage,
  onClick,
  onClickFavorite,
}) => {
  const { isMobile } = useResponsive();

  const addressText = useMemo(() => {
    if (address) {
      return isMobile ? PREFECTURES[address.prefecture] : address.fullAddress;
    }
    // 住所未登録時
    return '-';
  }, [address, isMobile]);

  return (
    <CardWrapper>
      <div css={styles.container} role="none" onClick={onClick}>
        <section css={styles.thumbSection}>
          <img src={thumbImage} />
        </section>
        <section css={styles.informationSection}>
          <div css={styles.upperInfoWrapper}>
            <div css={styles.namesWrapper}>
              <Title Tag="h1" mqSizes={['s', 'm']} maxLine={2}>
                {name}
              </Title>
              <Label size="xxxs" color="tapa" maxLine={1}>
                {nameKatakana}
              </Label>
            </div>
            <button
              type="button"
              css={styles.favoriteButtonWrapper}
              onClick={onClickFavorite}
            >
              {/* FIXME: Favorite機能を追加する。 */}
              <Icon pattern="HEART" size="s" fill="tapa" />
            </button>
          </div>
          <Label mqSizes={['xxxs', 'xxs']} color="tapa" maxLine={1}>
            {addressText}
          </Label>
        </section>
      </div>
    </CardWrapper>
  );
};
