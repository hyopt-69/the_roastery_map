import { getOpacifyColor } from '../utils/styles/getOpacifyColor';

export const SHADOW_COLOR = getOpacifyColor('pumice', 's');

export const shadows = {
  s: `0 2px 4px ${SHADOW_COLOR}`,
  m: `0 4px 8px ${SHADOW_COLOR}`,
  l: `0 6px 12px ${SHADOW_COLOR}`,
} as const;

export type Shadow = keyof typeof shadows;
