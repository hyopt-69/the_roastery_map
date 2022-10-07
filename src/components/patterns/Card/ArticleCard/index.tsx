import React from 'react';

import { Card } from '@/components/parts/Card';
import { Avatar } from '@/components/parts/Image/Avatar';
import { Tag } from '@/components/parts/Tag';
import { Body } from '@/components/parts/Text/Body';
import { Label } from '@/components/parts/Text/Label';
import { Title } from '@/components/parts/Text/Title';
import { styles } from './styles';

type AuthorInfo = {
  src: string;
  name: string;
};
type Props = {
  src: string;
  title: string;
  body: string;
  createdAt: string;
  tags: string[];
  // FIXME: AdminInfoコンポーネントから取ってくる。
  authorInfo: AuthorInfo;
};

export const ArticleCard: React.FC<Props> = ({
  src,
  title,
  body,
  tags,
  createdAt,
  authorInfo,
}) => {
  return (
    <Card shadow="m">
      <img css={styles.image} src={src} />
      <div css={styles.container}>
        <div css={styles.contents}>
          <Title size="l">{title}</Title>
          <Body size="s">{body}</Body>
        </div>
        <div css={styles.tags}>
          {tags.map((tag) => (
            <Tag pattern="default" label={`#${tag}`} key={tag} />
          ))}
        </div>
        <div css={styles.authorInfo}>
          <Avatar size="s" src={authorInfo.src} />
          <Label>{authorInfo.name}</Label>
        </div>
        <Label css={styles.createAt}>{createdAt}</Label>
      </div>
    </Card>
  );
};
