import React, { useRef } from 'react';

import { getStyles } from './styles';

type Props = {
  children: React.ReactNode;
  isVisible: boolean;
  handleClose: () => void;
};

export const ModalWrapper: React.FC<Props> = ({
  children,
  isVisible,
  handleClose,
}) => {
  const backgroundRef = useRef<React.ElementRef<'div'>>(null);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const dynamicStyles = getStyles(isVisible);

  return (
    <div
      css={dynamicStyles.background}
      ref={backgroundRef}
      onClick={handleClick}
      role="none"
    >
      <div css={dynamicStyles.content}>{children}</div>
    </div>
  );
};
