import React from 'react';

import { getStyles, StyleProps } from './styles';

type AProps = Pick<
  React.ComponentProps<'a'>,
  'target' | 'children' | 'href' | 'aria-disabled'
>;

type Props = AProps & StyleProps;

export const Link: React.FC<Props> = ({
  children,
  target,
  href,
  ...styleProps
}) => {
  return (
    <a target={target} href={href} css={getStyles(styleProps)}>
      {children}
    </a>
  );
};
