export const opacities = {
  full: 0,
  s: 0.25,
  m: 0.5,
  l: 0.75,
  none: 1,
} as const;

export type Opacity = keyof typeof opacities;
