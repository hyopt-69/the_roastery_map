import { css } from '@emotion/react';
import React from 'react';

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
