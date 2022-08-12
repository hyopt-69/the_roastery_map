import NextLink from 'next/link';
import React from 'react';

import { getStyles, StyleProps } from './styles';

type AProps = Pick<React.ComponentProps<'a'>, 'target' | 'children'>;
type NextLinkProps = Pick<React.ComponentProps<typeof NextLink>, 'href'>;

type Props = AProps & NextLinkProps & StyleProps;

export const Link: React.FC<Props> = ({
  children,
  target,
  href,
  size,
  mqSizes,
  color,
  weight,
  hasUnderLine,
}) => {
  return (
    <NextLink href={href} passHref>
      <a
        target={target}
        css={getStyles({ size, color, mqSizes, weight, hasUnderLine })}
      >
        {children}
      </a>
    </NextLink>
  );
};
