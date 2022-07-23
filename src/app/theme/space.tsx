export const space = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '48px',
  xxl: '64px',
} as const;

export type Spaces = keyof typeof space;
