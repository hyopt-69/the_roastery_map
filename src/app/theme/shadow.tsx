// FIXME: color定義後修正する?
const SHADOW_COLOR = '#0000004D';

export const shadow = {
  s: `0 2px 4px ${SHADOW_COLOR}`,
  m: `0 4px 8px ${SHADOW_COLOR}`,
  l: `0 6px 12px ${SHADOW_COLOR}`,
} as const;

export type Shadow = keyof typeof shadow;
