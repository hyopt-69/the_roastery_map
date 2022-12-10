import React, { SetStateAction, useCallback, useMemo } from 'react';

import { ActionButton } from '@/components/atoms/ActionButton';
import { Icon } from '@/components/atoms/Icon';
import { Label } from '@/components/atoms/Label';
import { ModalWrapper } from '@/components/templates/ModalWrapper';

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
          <Icon pattern="X" fill="white" size="s" />
          <Label color="white" size="xs">
            {`${activeIndex + 1} / ${imageSrcList.length}`}
          </Label>
        </div>
      }
    >
      <section css={styles.imageSection}>
        <div css={getButtonWrapperStyle(!isFirstImage)}>
          <ActionButton pattern="back" isTransparent onClick={handleBack} />
        </div>
        <div css={styles.imageWrapper}>
          {imageSrcList.map((src, i) => (
            <img css={imageStyle(i === activeIndex)} src={src} />
          ))}
        </div>
        <div css={getButtonWrapperStyle(!isLastImage)}>
          <ActionButton pattern="next" isTransparent onClick={handleNext} />
        </div>
      </section>
    </ModalWrapper>
  );
};
