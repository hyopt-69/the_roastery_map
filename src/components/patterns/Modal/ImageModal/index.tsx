import React, { SetStateAction, useCallback, useMemo } from 'react';

import { ModalWrapper } from '@/components/libs/Modal/ModalWrapper';
import { ActionButton } from '@/components/parts/Button/ActionButton';
import { Icon } from '@/components/parts/Image/Icon';
import { Label } from '@/components/parts/Text/Label';

import { styles, getButtonWrapperStyle } from './styles';

type ModalProps = Omit<React.ComponentProps<typeof ModalWrapper>, 'children'>;
type Props = {
  imageSrcList: string[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<SetStateAction<number>>;
} & ModalProps;

export const ImageModal: React.FC<Props> = ({
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
          <Icon pattern="X" stroke="white" />
          <Label color="white" size="s">
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
          <img src={imageSrcList[activeIndex]} />
        </div>
        <div css={getButtonWrapperStyle(!isLastImage)}>
          <ActionButton pattern="next" onClick={handleNext} />
        </div>
      </section>
    </ModalWrapper>
  );
};
