export const durations = {
  s: '0.2s',
  m: '0.4s',
  l: '0.6s',
  xxl: '1.5s',
} as const;

export type Duration = keyof typeof durations;
