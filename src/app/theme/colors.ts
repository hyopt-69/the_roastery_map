export const colors = {
  // モノクロ
  vulcan: '#14171A',
  abbey: '#4F5153',
  pumice: '#C4C5C6',
  gallery: '#EBEDEF',
  white: '#FFFFFF',
  // メインカラー

  // サブカラー

  // その他
  transparent: 'transparent',
} as const;

export type Color = keyof typeof colors;
