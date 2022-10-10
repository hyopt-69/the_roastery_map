import React from 'react';

import { IconPattern } from '@/app/assets/icons';
import { Color } from '@/app/theme/colors';
import { Icon } from '@/components/parts/Icon';

import { getStyles, StyleProps } from './styles';

// FIXME: そのうちactionPatternごとにanimationとか入れたい。
// このコンポーネントはswitchして出し分けるハブになるだけ。基本的なStyleは統一しつつそれぞれに適したanimationを入れたい。
// nextは右に矢印がanimationするし、backは左にanimationする。的な。

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick'>;
type ActionPattern = 'next' | 'back';
type Props = {
  pattern: ActionPattern;
} & StyleProps &
  ButtonProps;

const ICON: Record<ActionPattern, IconPattern> = {
  next: 'ARROW_RIGHT',
  back: 'ARROW_LEFT',
};

export const ActionButton: React.FC<Props> = ({
  pattern,
  isTransparent,
  size = 'm',
  onClick,
}) => {
  const styles = getStyles({ size, isTransparent });
  const iconColor: Color = isTransparent ? 'white' : 'mirage';

  return (
    <button type="button" css={styles.container} onClick={onClick}>
      <Icon pattern={ICON[pattern]} size="s" stroke={iconColor} />
    </button>
  );
};
