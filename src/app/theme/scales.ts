export const scales = {
  s: 'scale(0.99)',
} as const;

export type Scale = keyof typeof scales;
