import React from 'react';

import { Avatar } from '@/components/atoms/Avatar';
import { Body } from '@/components/atoms/Body';
import { Label } from '@/components/atoms/Label';
import { Tag } from '@/components/atoms/Tag';
import { Title } from '@/components/atoms/Title';
import { CardWrapper } from '@/components/templates/CardWrapper';
import { useResponsive } from '@/hooks/useResponsive';
import { getFormatDate } from '@/utils/date';

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

export const NewsCard: React.FC<Props> = ({
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
    <CardWrapper>
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
            <Title Tag="h2" size={isMobile ? 'xs' : 'm'} maxLine={3}>
              {title}
            </Title>
            {!isMobile && (
              <Body size="xs" color="tapa" maxLine={4}>
                {body}
              </Body>
            )}
          </div>

          <div css={styles.informationWrapper}>
            <div css={styles.tagWrapper}>
              {tags.map(({ label }) => (
                <Tag
                  pattern="default"
                  label={`${label}`}
                  onClick={onClick}
                  key={label}
                />
              ))}
            </div>
            {!isMobile && (
              <div css={styles.authorInformation}>
                <Avatar size="m" src={authorInfo.src} />
                <Label size="xxs">{authorInfo.name}</Label>
              </div>
            )}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
