import { useQRCode } from 'next-qrcode';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { colors } from '@/app/theme/colors';

import { styles } from './styles';

type Props = {
  url: string;
};

export const QRcode: React.FC<Props> = ({ url }) => {
  const wrapperRef = useRef<React.ElementRef<'div'>>(null);
  const [qrWidth, setQrWidth] = useState(0);
  const { Image } = useQRCode();

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      setQrWidth(wrapperRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div ref={wrapperRef} css={styles.container}>
      <Image
        text={url}
        options={{
          type: 'image/webp',
          level: 'M',
          margin: 0,
          width: qrWidth,
          color: {
            dark: colors.mirage,
            light: colors.white,
          },
        }}
      />
    </div>
  );
};
