import React from 'react';

import { Divider } from '@/components/atoms/Divider';
import { ExternalLink } from '@/components/atoms/ExternalLink';
import { QRcode } from '@/components/atoms/QRcode';
import { BalloonWrapper } from '@/components/templates/BalloonWrapper';

import { styles } from './styles';

type Props = {
  url: string;
};

export const QRBalloon: React.FC<Props> = ({ url }) => {
  return (
    <BalloonWrapper>
      <div css={styles.container}>
        <div css={styles.qrWrapper}>
          <QRcode url={url} />
        </div>
        <Divider label="または" />
        <ExternalLink size="xxxs" color="tapa" href={url} hasUnderLine>
          ブラウザで開く
        </ExternalLink>
      </div>
    </BalloonWrapper>
  );
};
