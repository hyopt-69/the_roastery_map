import React from 'react';

import { Title } from '@/components/parts/Title';

import { styles } from './styles';

import { ModalHeader } from '../utils/ModalHeader';
import { ModalWrapper } from '../utils/ModalWrapper';

type Props = Omit<React.ComponentProps<typeof ModalWrapper>, 'children'> & {
  title?: string;
};

// FIXME: Modalのanimation確認用の適当なModal。そのうち消す

export const BasicModal: React.FC<Props> = ({
  isVisible,
  handleClose,
  title,
}) => {
  return (
    <ModalWrapper isVisible={isVisible} handleClose={handleClose}>
      <div css={styles.container}>
        <ModalHeader handleClose={handleClose} />
        <section>{!!title && <Title size="s">{title}</Title>}</section>
      </div>
    </ModalWrapper>
  );
};
