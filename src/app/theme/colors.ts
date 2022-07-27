export const colors = {
  // モノクロ
  vulcan: '#14171A',
  abbey: '#4F5153',
  pumice: '#C4C5C6',
  gallery: '#EBEDEF',
  white: '#FFFFFF',
  // メインカラー
  sunsetOrange: '#F5474A',
  froly: '#F87577',
  cinderella: '#FDDDDD',
  // サブカラー
  mountainMeadow: '#1DAA77',
  shamrock: '#27E39E',
  riptide: '#93F1CF',
  // その他
  transparent: 'transparent',
} as const;

export type Color = keyof typeof colors;
