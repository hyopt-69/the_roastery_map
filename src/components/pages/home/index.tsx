import { styled } from '@linaria/react';
import React, { useState } from 'react';

// ただのlinariaの使い方の例

type Props = {
  color: string;
};

const bgColor = 'blue';

const Button = styled.button<Props>`
  font-size: 100px;
  color: ${(props) => (props.disabled ? 'white' : props.color)};
  :enabled {
    background-color: ${bgColor};
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  :disabled {
    background-color: gray;
  }
`;

export const HomePage: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Button
      color="black"
      disabled={isDisabled}
      onClick={() => setIsDisabled((prev) => !prev)}
    >
      Hello HomePage
    </Button>
  );
};
