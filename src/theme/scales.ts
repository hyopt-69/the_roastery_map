export const scales = {
  smaller: 'scale(0.97)',
  bigger: 'scale(1.01)',
} as const;

export type Scale = keyof typeof scales;
