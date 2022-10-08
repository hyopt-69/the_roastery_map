import React from 'react';

import { Balloon } from '@/components/parts/Balloon';
import { Divider } from '@/components/parts/Divider';
import { QRcode } from '@/components/parts/Image/QRcode';
import { ExternalLink } from '@/components/parts/ExternalLink';

import { styles } from './styles';

type Props = {
  url: string;
};

export const QRBalloon: React.FC<Props> = ({ url }) => {
  return (
    <Balloon>
      <div css={styles.container}>
        <div css={styles.qrWrapper}>
          <QRcode url={url} />
        </div>
        <Divider label="または" />
        <ExternalLink size="xxxs" color="tapa" href={url} hasUnderLine>
          ブラウザで開く
        </ExternalLink>
      </div>
    </Balloon>
  );
};
