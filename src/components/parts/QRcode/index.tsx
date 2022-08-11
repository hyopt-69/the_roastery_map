import { useQRCode } from 'next-qrcode';
import React from 'react';

import { colors } from '@/app/theme/colors';

import { getStyles, QRCodeSize } from './styles';

type Props = {
  url: string;
  size: QRCodeSize;
};

export const QRcode: React.FC<Props> = ({ url, size }) => {
  const { Image } = useQRCode();

  return (
    <div css={getStyles(size)}>
      <Image
        text={url}
        options={{
          type: 'image/webp',
          level: 'M',
          margin: 0,
          color: {
            dark: colors.mirage,
            light: colors.white,
          },
        }}
      />
    </div>
  );
};
