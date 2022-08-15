import React from 'react';

import { Icon } from '@/components/parts/Icon';

import { styles } from './styles';

type Props = {
  handleClose: () => void;
};

export const ModalHeader: React.FC<Props> = ({ handleClose }) => {
  return (
    <header css={styles.container}>
      <button css={styles.closeButton} type="button" onClick={handleClose}>
        <Icon pattern="X" size="s" stroke="tapa" />
      </button>
    </header>
  );
};
