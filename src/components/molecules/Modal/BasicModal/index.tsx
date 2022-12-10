import React from 'react';

import { Title } from '@/components/atoms/Title';
import { ModalWrapper } from '@/components/templates/ModalWrapper';

import { styles } from './styles';

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
        <section>{!!title && <Title size="s">{title}</Title>}</section>
      </div>
    </ModalWrapper>
  );
};
