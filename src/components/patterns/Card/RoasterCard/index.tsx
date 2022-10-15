import React, { useMemo, useRef, useState } from 'react';

import { Roaster } from '@/app/domains/roaster';
import { CarouselIndicator } from '@/components/libs/Carousel/CarouselIndicator';
import {
  CarouselHandler,
  CarouselWrapper,
} from '@/components/libs/Carousel/CarouselWrapper';
import { ActionButton } from '@/components/parts/ActionButton';
import { Card } from '@/components/parts/Card';
import { Label } from '@/components/parts/Label';
import { Title } from '@/components/parts/Title';

import { styles, getCarouselWrapperStyle } from './styles';

type Props = {
  onClick: () => void;
} & Roaster;

export const RoasterCard: React.FC<Props> = ({
  name,
  nameKatakana,
  address,
  images,
  onClick,
}) => {
  const carouselRef = useRef<CarouselHandler>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isVisibleBackButton = useMemo(() => {
    return isHovered && activeIndex !== 0;
  }, [activeIndex, isHovered]);

  const isVisibleNextButton = useMemo(() => {
    return isHovered && activeIndex !== images.length - 1;
  }, [activeIndex, images.length, isHovered]);

  return (
    <Card>
      <div
        css={styles.container}
        role="none"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <section css={styles.carouselSection}>
          <div css={getCarouselWrapperStyle(isVisibleBackButton).back}>
            <ActionButton
              pattern="back"
              size="s"
              onClick={() => carouselRef.current?.scrollPrev()}
            />
          </div>
          <CarouselWrapper
            ref={carouselRef}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isFluidLayout
          >
            {images.map((image, i) => {
              return <img src={image} key={i} />;
            })}
          </CarouselWrapper>
          <div css={getCarouselWrapperStyle(isHovered).indicator}>
            <CarouselIndicator
              itemLength={images.length}
              activeIndex={activeIndex}
              indicatorSize={5}
            />
          </div>
          <div css={getCarouselWrapperStyle(isVisibleNextButton).next}>
            <ActionButton
              pattern="next"
              size="s"
              onClick={() => carouselRef.current?.scrollNext()}
            />
          </div>
        </section>
        <section css={styles.informationSection}>
          <div css={styles.namesWrapper}>
            <Title Tag="h1" size="m" maxLine={2}>
              {name}
            </Title>
            <Label size="xxs" weight="bold" maxLine={1}>
              {nameKatakana}
            </Label>
          </div>
          <Label size="xxs" color="tapa" maxLine={1}>
            {address}
          </Label>
        </section>
      </div>
    </Card>
  );
};
