import { styled } from '@linaria/react';
import React, { useState } from 'react';

import { borderRadius } from '@/app/theme/borderRadius';
import { duration } from '@/app/theme/duration';
import { opacity } from '@/app/theme/opacity';

// ただのlinariaの使い方の例

type Props = {
  color: string;
};

const bgColor = '#555552';

const Button = styled.button<Props>`
  font-size: 100px;
  color: ${(props) => (props.disabled ? 'white' : props.color)};
  border-radius: ${borderRadius.xl};
  transition-duration: ${duration.m};
  :enabled {
    background-color: ${bgColor};
    opacity: ${opacity.full};
    cursor: pointer;
    :hover {
      opacity: ${opacity.none};
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
