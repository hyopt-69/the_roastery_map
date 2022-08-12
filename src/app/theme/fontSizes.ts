export const fontSizes = {
  xxs: 12,
  xs: 16,
  s: 20,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 48,
} as const;

export type FontSize = keyof typeof fontSizes;
