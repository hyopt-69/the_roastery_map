export const fontSizes = {
  xxs: 8,
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
  xxl: 64,
} as const;

export type FontSize = keyof typeof fontSizes;
