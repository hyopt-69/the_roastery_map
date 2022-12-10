import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';

import { Title } from '@/components/atoms/Title';
import { RoasterCard } from '@/components/organisms/roaster/RoasterCard';
import {
  CarouselHandler,
  CarouselWrapper,
} from '@/components/templates/CarouselWrapper';
import { TooltipWrapper } from '@/components/templates/TooltipWrapper';
import { DUMMY_ROASTER_DATA } from '@/dummy/data/roaster';
import { colors } from '@/theme/colors';
import { getDateDistance } from '@/utils/date';

export const HomeMainPage: React.FC = () => {
  const buttonRef = useRef<React.ElementRef<'button'>>(null);
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
                width: 700,
                height: 200,
                background: colors.white,
              })}
              role="none"
              onClick={() => {
                // eslint-disable-next-line no-console
                if (i === activeIndex) console.log('hello');
              }}
            >
              {i}
            </div>
          );
        })}
      </CarouselWrapper>
      <p>{getDateDistance({ targetDate: new Date('2022.10.02') })}</p>
      <div css={css({ position: 'relative' })}>
        <div css={css({ position: 'absolute', top: 300 })}>
          <TooltipWrapper targetRef={buttonRef} revealFrom="bottom">
            <div css={css({ width: 200, height: 200, background: 'red' })} />
          </TooltipWrapper>
        </div>
        <button
          type="button"
          ref={buttonRef}
          onClick={() => carouselRef.current?.scrollNext()}
        >
          {`next: ${activeIndex}`}
        </button>
      </div>
      <div css={css({ display: 'flex', gap: 10 })}>
        <RoasterCard onClick={() => {}} {...DUMMY_ROASTER_DATA} />
        <RoasterCard onClick={() => {}} {...DUMMY_ROASTER_DATA} />
      </div>
    </div>
  );
};
