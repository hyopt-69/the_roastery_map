import React from 'react';

import { IconPattern } from '@/app/assets/icons';
import { Icon } from '@/components/parts/Image/Icon';

import { getStyles, StyleProps } from './styles';

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick'>;
type ActionPattern = 'close' | 'next' | 'back';
type Props = {
  pattern: ActionPattern;
} & StyleProps &
  ButtonProps;

const ICON: Record<ActionPattern, IconPattern> = {
  close: 'X',
  next: 'CHEVRON_RIGHT',
  back: 'CHEVRON_LEFT',
};

export const ActionButton: React.FC<Props> = ({
  pattern,
  size = 'm',
  onClick,
}) => {
  const styles = getStyles({ size });

  return (
    <button type="button" css={styles.container} onClick={onClick}>
      <Icon pattern={ICON[pattern]} size="s" stroke="white" />
    </button>
  );
};
