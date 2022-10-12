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
      <div css={styles.container}>
        <div css={styles.imgContents}>
          <img css={styles.img} src={src} />
        </div>
        <div css={styles.textContents}>
          <div css={styles.title}>
            <Title size="l">{title}</Title>
          </div>
          <div css={styles.body}>
            <Body size="m">{body}</Body>
          </div>
          <div css={styles.tags}>
            {tags.map((tag) => (
              <Tag pattern="default" label={`#${tag}`} key={tag} />
            ))}
          </div>
          <div css={styles.label}>
            <Avatar size="s" src={authorInfo.src} />
            <Label>{authorInfo.name}</Label>
            <div css={styles.createdAt}>
              <Label size="s">{createdAt}</Label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
