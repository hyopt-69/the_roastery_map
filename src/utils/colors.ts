import { Color, colors } from '../theme/colors';
import { opacities, Opacity } from '../theme/opacities';

// 透明度とAlpha値の関係の参照(https://qiita.com/CUTBOSS/items/a96fb369e5d1d8eda0da)

// (typeof opacities)[Opacity] にしろと怒られるのでdisable
// eslint-disable-next-line prettier/prettier
const ALPHA: Record<typeof opacities[Opacity], string> = {
  0: '00',
  0.25: '40',
  0.5: '80',
  0.75: 'BF',
  1: 'FF',
};

export const getOpacifyColor = (color: Color, opacity: Opacity) => {
  const baseOpacity = opacities[opacity];

  return `${colors[color]}${ALPHA[baseOpacity]}`;
};
