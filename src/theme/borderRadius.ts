export const borderRadiuses = {
  xs: 2,
  s: 4,
  m: 8,
  l: 12,
  xl: 16,
} as const;

export type BorderRadius = keyof typeof borderRadiuses;
