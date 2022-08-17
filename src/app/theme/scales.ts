export const scales = {
  smaller: 'scale(0.99)',
  bigger: 'scale(1.01)',
} as const;

export type Scale = keyof typeof scales;
