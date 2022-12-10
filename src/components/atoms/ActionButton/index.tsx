import React from 'react';

import { IconPattern } from '@/assets/icons';
import { Icon } from '@/components/atoms/Icon';
import { Color } from '@/theme/colors';

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

const ICON = {
  next: 'ARROW_RIGHT',
  back: 'ARROW_LEFT',
} as const satisfies Record<ActionPattern, IconPattern>;

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
      <Icon pattern={ICON[pattern]} size="s" fill={iconColor} />
    </button>
  );
};
