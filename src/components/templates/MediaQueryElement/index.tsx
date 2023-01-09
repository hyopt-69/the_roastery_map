import React from 'react';

import { styles } from './styles';

type Props = {
  mobile?: React.ReactElement;
  desktop?: React.ReactElement;
};

export const MediaQueryElement: React.FC<Props> = ({
  mobile = null,
  desktop = null,
}) => {
  return (
    <>
      <div css={styles.mobileElementWrapper}>{mobile}</div>
      <div css={styles.desktopElementWrapper}>{desktop}</div>
    </>
  );
};
