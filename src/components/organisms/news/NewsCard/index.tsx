import React from 'react';

import { Avatar } from '@/components/atoms/Avatar';
import { Label } from '@/components/atoms/Label';
import { Tag } from '@/components/atoms/Tag';
import { Title } from '@/components/atoms/Title';
import { CardWrapper } from '@/components/templates/CardWrapper';
import { ADMIN_INFO } from '@/domains/admin/constants';
import { NEWS_CATEGORY_LABEL } from '@/domains/news/constants';
import { News } from '@/domains/news/types';
import { useResponsive } from '@/hooks/useResponsive';
import { getFormatDate } from '@/utils/date';

import { styles } from './styles';

type Props = {
  onClick: () => void;
} & News;

export const NewsCard: React.FC<Props> = ({
  thumbImage,
  title,
  category,
  createdAt,
  author,
  onClick,
}) => {
  const { isMobile } = useResponsive();

  return (
    <CardWrapper>
      <div css={styles.container} onClick={onClick} role="none">
        <img css={styles.image} src={thumbImage} />

        <div css={styles.contentWrapper}>
          <div css={styles.upperContentWrapper}>
            <Label size="xxs" color="tapa">
              {getFormatDate({
                format: 'yyyy.MM.dd',
                date: new Date(createdAt),
              })}
            </Label>
            <Title Tag="h2" mqSizes={['xs', 'm']} maxLine={3}>
              {title}
            </Title>
          </div>

          {!isMobile && (
            <div css={styles.informationWrapper}>
              <div css={styles.authorInformation}>
                <Avatar size="s" src={ADMIN_INFO[author].image} />
                <Label size="xxs">{ADMIN_INFO[author].name}</Label>
              </div>
              <Tag pattern="default" label={NEWS_CATEGORY_LABEL[category]} />
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};
