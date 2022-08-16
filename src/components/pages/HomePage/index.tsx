import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';

import { colors } from '@/app/theme/colors';
import { CarouselIndicator } from '@/components/libs/Carousel/CarouselIndicator';
import {
  CarouselHandler,
  CarouselWrapper,
} from '@/components/libs/Carousel/CarouselWrapper';
import { Title } from '@/components/parts/Title';

export const HomePage: React.FC = () => {
  const carouselRef = useRef<CarouselHandler>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div css={css({ background: colors.blackHaze })}>
      <Title size="l">Home</Title>
      <CarouselWrapper
        ref={carouselRef}
        edgeSpace={100}
        gapSpace={30}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {[...new Array(8)].map((_, i) => {
          return (
            <div
              key={i}
              css={css({
                width: 500,
                height: 200,
                background: colors.white,
              })}
              role="none"
              onClick={() => {
                if (i === activeIndex) console.log('hello');
              }}
            >
              {i}
            </div>
          );
        })}
      </CarouselWrapper>
      <CarouselIndicator
        itemLength={8}
        activeIndex={activeIndex}
        handleClickItem={(i) => carouselRef.current?.scrollTo(i)}
      />
      <button type="button" onClick={() => carouselRef.current?.scrollNext()}>
        {`next: ${activeIndex}`}
      </button>
    </div>
  );
};
