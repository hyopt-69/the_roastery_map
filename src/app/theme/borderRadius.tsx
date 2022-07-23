export const borderRadius = {
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '12px',
  xl: '16px',
} as const;

export type BorderRadius = keyof typeof borderRadius;
