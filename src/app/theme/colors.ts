export const colors = {
  // モノクロ
  black: '#000000',
  mirage: '#1B1F26',
  abbey: '#4F5153',
  pumice: '#C4C5C6',
  gallery: '#EBEDEF',
  white: '#FFFFFF',
  // メインカラー
  valencia: '#DD4043',
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
