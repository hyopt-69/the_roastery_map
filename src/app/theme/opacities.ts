export const opacities = {
  transparent: '0',
  s: '0.25',
  m: '0.5',
  l: '0.75',
  default: '1',
} as const;

export type Opacity = keyof typeof opacities;
