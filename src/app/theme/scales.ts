export const scales = {
  smaller: 'scale(0.98)',
  bigger: 'scale(1.02)',
} as const;

export type Scale = keyof typeof scales;
