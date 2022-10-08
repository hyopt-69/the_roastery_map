import React, { SetStateAction, useCallback, useMemo } from 'react';

import { ModalWrapper } from '@/components/libs/Modal/ModalWrapper';
import { ActionButton } from '@/components/parts/Button/ActionButton';
import { Icon } from '@/components/parts/Image/Icon';
import { Label } from '@/components/parts/Text/Label';

import { styles, getButtonWrapperStyle, imageStyle } from './styles';

type ModalProps = Omit<React.ComponentProps<typeof ModalWrapper>, 'children'>;
type Props = {
  imageSrcList: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<SetStateAction<number>>;
} & ModalProps;

export const PreviewModal: React.FC<Props> = ({
  isVisible,
  imageSrcList,
  activeIndex,
  setActiveIndex,
  handleClose,
}) => {
  const isFirstImage = useMemo(() => {
    return activeIndex === 0;
  }, [activeIndex]);

  const isLastImage = useMemo(() => {
    return activeIndex === imageSrcList.length - 1;
  }, [activeIndex, imageSrcList]);

  const handleBack = useCallback(() => {
    if (isFirstImage) return;
    setActiveIndex((i) => i - 1);
  }, [isFirstImage, setActiveIndex]);

  const handleNext = useCallback(() => {
    if (isLastImage) return;
    setActiveIndex((i) => i + 1);
  }, [isLastImage, setActiveIndex]);

  return (
    <ModalWrapper
      isVisible={isVisible}
      handleClose={handleClose}
      backgroundMode="dark"
      headerElement={
        <div css={styles.header} onClick={handleClose} role="none">
          <Icon pattern="X" stroke="white" size="s" />
          <Label color="white" size="xs">
            {`${activeIndex + 1} / ${imageSrcList.length}`}
          </Label>
        </div>
      }
    >
      <section css={styles.imageSection}>
        <div css={getButtonWrapperStyle(!isFirstImage)}>
          <ActionButton pattern="back" onClick={handleBack} />
        </div>
        <div css={styles.imageWrapper}>
          {imageSrcList.map((src, i) => (
            <img css={imageStyle(i === activeIndex)} src={src} />
          ))}
        </div>
        <div css={getButtonWrapperStyle(!isLastImage)}>
          <ActionButton pattern="next" onClick={handleNext} />
        </div>
      </section>
    </ModalWrapper>
  );
};
