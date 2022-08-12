import { breakPoints, MAX_WINDOW_WIDTH } from '@/app/theme/breakPoints';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';

type Props = {
  min: FontSize;
  max: FontSize;
};

// 有効数字
const SIGNIFICANT = 1_000;

const round = (num: number) => {
  const roundedNum = Math.round(num * SIGNIFICANT);
  return roundedNum / SIGNIFICANT;
};

// NOTE: 参考記事: https://illustswitch.com/css-clamp-preferredvalue/
export const getFluidFontSize = ({ min, max }: Props) => {
  const minFont = fontSizes[min];
  const maxFont = fontSizes[max];
  const minViewPort = breakPoints.mobile;
  const maxViewPort = MAX_WINDOW_WIDTH;

  const slope = (maxFont - minFont) / (maxViewPort - minViewPort);
  const preferredValue = `
    ${round(minFont - minViewPort * slope)}px + ${round(slope * 100)}vw`;

  return `clamp(${minFont}px, ${preferredValue}, ${maxFont}px)`;
};
