import { breakPoints, MAX_WINDOW_WIDTH } from '@/app/theme/breakPoints';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';

type Props = {
  min: FontSize;
  max: FontSize;
};

// 1remあたりのpx
const DEFAULT_REM = 16;
// 有効数字
const SIGNIFICANT = 1_000;

const round = (num: number) => {
  const roundedNum = Math.round(num * SIGNIFICANT);
  return roundedNum / SIGNIFICANT;
};

// NOTE: 参考記事: https://illustswitch.com/css-clamp-preferredvalue/
export const getFluidFontSize = ({ min, max }: Props) => {
  const minRem = fontSizes[min] / DEFAULT_REM;
  const maxRem = fontSizes[max] / DEFAULT_REM;
  const minViewPortRem = breakPoints.mobile / DEFAULT_REM;
  const maxViewPortRem = MAX_WINDOW_WIDTH / DEFAULT_REM;

  const slope = (maxRem - minRem) / (maxViewPortRem - minViewPortRem);
  const preferredValue = `
    ${round(minRem - minViewPortRem * slope)}rem + ${round(slope * 100)}vw`;

  return `clamp(${minRem}rem, ${preferredValue}, ${maxRem}rem)`;
};
