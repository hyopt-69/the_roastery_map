import React from 'react';

import { useResponsive } from '@/app/hooks/useResponsive';
import { getFormatDate } from '@/app/utils/date';
import { Avatar } from '@/components/parts/Avatar';
import { Body } from '@/components/parts/Body';
import { Card } from '@/components/parts/Card';
import { Label } from '@/components/parts/Label';
import { Tag } from '@/components/parts/Tag';
import { Title } from '@/components/parts/Title';

import { styles } from './styles';

type TagProps = Pick<React.ComponentProps<typeof Tag>, 'label'>;
type AuthorInfo = {
  src: string;
  name: string;
};
type Props = {
  src: string;
  title: string;
  body: string;
  createdAt: string;
  tags: TagProps[];
  // FIXME: AdminInfoコンポーネントから取ってくる。
  authorInfo: AuthorInfo;
  onClick: () => void;
};

export const ArticleCard: React.FC<Props> = ({
  src,
  title,
  body,
  tags,
  createdAt,
  authorInfo,
  onClick,
}) => {
  const { isMobile } = useResponsive();

  return (
    <Card>
      <div css={styles.container} onClick={onClick} role="none">
        <img css={styles.image} src={src} />

        <div css={styles.contentWrapper}>
          <div css={styles.textsWrapper}>
            <Label size="xxs" color="tapa">
              {getFormatDate({
                format: 'yyyy.MM.dd',
                date: new Date(createdAt),
              })}
            </Label>
            <Title size={isMobile ? 'xs' : 'l'} maxLine={3}>
              {title}
            </Title>
            <Body
              size={isMobile ? 'xxs' : 'xs'}
              color="tapa"
              maxLine={isMobile ? 2 : 4}
            >
              {body}
            </Body>
          </div>

          {!isMobile && (
            <div css={styles.informationWrapper}>
              <div css={styles.tagWrapper}>
                {tags.map(({ label }) => (
                  <Tag
                    pattern="default"
                    label={`# ${label}`}
                    onClick={onClick}
                    key={label}
                  />
                ))}
              </div>
              <div css={styles.authorInformation}>
                <Avatar size="s" src={authorInfo.src} />
                <Label size="xxs">{authorInfo.name}</Label>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
