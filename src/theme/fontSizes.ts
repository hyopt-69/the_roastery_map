export const fontSizes = {
  xxxs: 10,
  xxs: 14,
  xs: 16,
  s: 20,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 48,
  xxxl: 56,
} as const;

export type FontSize = keyof typeof fontSizes;
