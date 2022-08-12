export const borderWidths = {
  s: 0.5,
  m: 1,
  l: 2,
} as const;

export type BorderRadius = keyof typeof borderWidths;
