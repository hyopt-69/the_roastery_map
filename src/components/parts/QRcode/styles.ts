import { css } from '@emotion/react';

export type QRCodeSize = 's' | 'm' | 'l' | 'fill';

const QRCODE_SIZES: Record<QRCodeSize, number | '100%'> = {
  s: 24,
  m: 36,
  l: 48,
  fill: '100%',
};

export const getStyles = (size: QRCodeSize) =>
  css({
    width: QRCODE_SIZES[size],
  });
