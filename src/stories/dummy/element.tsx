import { css, CSSObject } from '@emotion/react';
import React from 'react';

type Content = {
  onClick: () => void;
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

type Button = {
  onClick: () => void;
};
export const DummyButton: React.FC<Button> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      css={css({
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `10px 40px`,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
      })}
    >
      Click Me !!
    </button>
  );
};
