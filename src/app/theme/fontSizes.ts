export const fontSizes = {
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '48px',
  xxl: '64px',
} as const;

export type FontSize = keyof typeof fontSizes;
