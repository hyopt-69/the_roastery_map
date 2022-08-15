import X from '@public/svg/x.svg';

// NOTE: https://feathericons.com/ から取得

export const ICONS = {
  X,
} as const;

export type IconPattern = keyof typeof ICONS;
