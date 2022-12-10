import { css, CSSObject } from '@emotion/react';
import React from 'react';

type Content = {
  onClick?: () => void;
} & Pick<CSSObject, 'width' | 'height' | 'backgroundColor'>;
export const DummyContent: React.FC<Content> = ({
  width = '100%',
  height = '100%',
  backgroundColor = 'transparent',
  onClick,
}) => {
  return (
    <div
      role="none"
      onClick={onClick}
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        backgroundColor,
      })}
    >
      Dummy
    </div>
  );
};
