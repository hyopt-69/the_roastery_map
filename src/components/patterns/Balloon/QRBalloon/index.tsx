import React from 'react';

import { Balloon } from '@/components/parts/Container/Balloon';
import { QRcode } from '@/components/parts/Image/QRcode';
import { ExternalLink } from '@/components/parts/Text/ExternalLink';

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
        <div css={styles.divider}>または</div>
        <ExternalLink size="xxxs" color="tapa" href={url} hasUnderLine>
          ブラウザで開く
        </ExternalLink>
      </div>
    </Balloon>
  );
};
