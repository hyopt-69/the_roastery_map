import React from 'react';

import { useModalWrapper } from './hooks';
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
  const { backgroundRef, onClickBackground } = useModalWrapper({ handleClose });
  const { background, header, content } = getStyles({
    isVisible,
    backgroundMode,
  });

  return (
    <div
      css={background}
      ref={backgroundRef}
      onClick={onClickBackground}
      role="none"
    >
      {headerElement && <div css={header}>{headerElement}</div>}
      <div css={content}>{children}</div>
    </div>
  );
};
