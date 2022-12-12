import { useCallback, useRef } from 'react';

type HooksProps = {
  handleClose: () => void;
};

export const useModalWrapper = ({ handleClose }: HooksProps) => {
  const backgroundRef = useRef<React.ElementRef<'div'>>(null);

  const onClickBackground: React.MouseEventHandler<HTMLDivElement> =
    useCallback(
      (e) => {
        if (e.target === e.currentTarget) handleClose();
      },
      [handleClose]
    );

  return {
    backgroundRef,
    onClickBackground,
  };
};
