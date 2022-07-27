import EXAMPLE from '@public/svg/example.svg';

export const ICONS = {
  EXAMPLE,
} as const;

export type IconPattern = keyof typeof ICONS;
