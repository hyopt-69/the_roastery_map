import React, {
  useCallback,
  useRef,
  createRef,
  useImperativeHandle,
} from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
} & StyleProps;

export type CarouselHandler = {
  scrollTo: (index: number) => void;
  scrollNext: () => void;
  scrollPrev: () => void;
};

export const CarouselWrapper = React.forwardRef<CarouselHandler, Props>(
  ({ children, activeIndex, setActiveIndex, ...styleProps }, ref) => {
    const dynamicStyles = getStyles(styleProps);
    const itemRefList = useRef(
      children.map(() => createRef<React.ElementRef<'div'>>())
    );

    const handleScrollTo = useCallback(
      (index: number) => {
        if (activeIndex === index) return;

        itemRefList.current[index]?.current?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
        setActiveIndex(index);
      },
      [activeIndex, setActiveIndex]
    );

    const handleScrollToNext = useCallback(() => {
      if (activeIndex === children.length - 1) return;
      handleScrollTo(activeIndex + 1);
    }, [activeIndex, children, handleScrollTo]);

    const handleScrollToPrev = useCallback(() => {
      if (activeIndex === 0) return;
      handleScrollTo(activeIndex - 1);
    }, [activeIndex, handleScrollTo]);

    useImperativeHandle(ref, () => ({
      scrollTo: handleScrollTo,
      scrollNext: handleScrollToNext,
      scrollPrev: handleScrollToPrev,
    }));

    return (
      <div css={dynamicStyles.carouselWrapper}>
        {children.map((child, i) => {
          return (
            <div
              key={i}
              ref={itemRefList.current[i]}
              role="none"
              onClick={() => handleScrollTo(i)}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }
);
