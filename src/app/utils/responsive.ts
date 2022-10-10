import { CSSObject } from '@emotion/react';
import facepaint from 'facepaint';

import { breakPoints, MAX_WINDOW_WIDTH } from '@/app/theme/breakPoints';
import { FontSize, fontSizes } from '@/app/theme/fontSizes';

export const mediaQuery = facepaint(
  Object.values(breakPoints).map((bp) => `@media (min-width: ${bp}px)`)
);

/**
 * 画面サイズに依存して、文字が自動的に調整されるようにするための関数
 * 参考記事: https://illustswitch.com/css-clamp-preferredvalue/
 *
 * @returns 動的に変化するfontSize
 */
export const getFluidFontSize = ({
  min,
  max,
}: {
  min: FontSize;
  max: FontSize;
}) => {
  const round = (num: number) => {
    // 有効数字
    const SIGNIFICANT = 1_000;
    const roundedNum = Math.round(num * SIGNIFICANT);
    return roundedNum / SIGNIFICANT;
  };

  const minFont = fontSizes[min];
  const maxFont = fontSizes[max];
  const minViewPort = breakPoints.mobile;
  const maxViewPort = MAX_WINDOW_WIDTH;

  const slope = (maxFont - minFont) / (maxViewPort - minViewPort);
  const preferredValue = `
    ${round(minFont - minViewPort * slope)}px + ${round(slope * 100)}vw`;

  return `clamp(${minFont}px, ${preferredValue}, ${maxFont}px)`;
};

/**
 * 改行の行数を指定するための関数
 *
 * @returns 改行用Style
 */
export const getBreakStyle = (maxLine?: number): CSSObject => {
  if (maxLine) {
    return {
      overflow: 'hidden',
      wordBreak: 'break-all',

      display: '-webkit-box',
      WebkitLineClamp: maxLine,
      WebkitBoxOrient: 'vertical',
    };
  }
  return {
    wordBreak: 'break-all',
  };
};
