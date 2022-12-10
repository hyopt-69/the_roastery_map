import React, { useMemo } from 'react';

import { Color } from '@/theme/colors';

import { getStyles } from './styles';

import { Label } from '../Label';

type ButtonProps = Pick<React.ComponentProps<'button'>, 'onClick'>;

type NewTag = {
  pattern: 'new';
  label?: never;
} & ButtonProps;

type DefaultTag = {
  pattern: 'default';
  label: string;
} & ButtonProps;
type Props = NewTag | DefaultTag;

const TAG_COLOR: Record<
  Props['pattern'],
  { labelColor: Color; bgColor: Color }
> = {
  default: {
    labelColor: 'mirage',
    bgColor: 'blackHaze',
  },
  new: {
    labelColor: 'froly',
    bgColor: 'cinderella',
  },
};
export const Tag: React.FC<Props> = ({ label, pattern, onClick }) => {
  const { labelColor, bgColor } = TAG_COLOR[pattern];
  const styles = getStyles({ bgColor });

  const patternLabel = useMemo(() => {
    switch (pattern) {
      case 'new':
        return 'NEW';
      case 'default':
      default:
        return label;
    }
  }, [label, pattern]);

  return (
    <button
      type="button"
      css={styles.container}
      onClick={onClick}
      disabled={!onClick}
    >
      <Label size="xxs" color={labelColor}>
        {patternLabel}
      </Label>
    </button>
  );
};
