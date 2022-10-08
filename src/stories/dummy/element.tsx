import { css, CSSObject } from '@emotion/react';
import React from 'react';

export const DummyContent: React.FC<
  Pick<CSSObject, 'width' | 'height' | 'backgroundColor'>
> = ({ width = '100%', height = '100%', backgroundColor = 'transparent' }) => {
  return (
    <div
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
export const DummyButton: React.FC<
  Pick<React.ComponentProps<'button'>, 'onClick'>
> = ({ onClick }) => {
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
