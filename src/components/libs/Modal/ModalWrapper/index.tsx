import React, { useRef } from 'react';

import { getStyles, StyleProps } from './styles';

type Props = {
  children: React.ReactNode;
  headerElement?: React.ReactNode;
  handleClose: () => void;
} & StyleProps;

export const ModalWrapper: React.FC<Props> = ({
  children,
  headerElement,
  isVisible,
  handleClose,
  backgroundMode,
}) => {
  const backgroundRef = useRef<React.ElementRef<'div'>>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const dynamicStyles = getStyles({ isVisible, backgroundMode });

  return (
    <div
      css={dynamicStyles.background}
      ref={backgroundRef}
      onClick={handleClick}
      role="none"
    >
      {headerElement && <div css={dynamicStyles.header}>{headerElement}</div>}
      <div css={dynamicStyles.content}>{children}</div>
    </div>
  );
};
