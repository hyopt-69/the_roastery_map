export const spaces = {
  xxs: 4,
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
  xxl: 64,
} as const;

export type Space = keyof typeof spaces;
