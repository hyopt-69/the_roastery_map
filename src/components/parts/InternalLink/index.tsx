import NextLink from 'next/link';
import React from 'react';

import { Path, PATHS } from '@/app/constants/path';

import { getStyles, StyleProps } from './styles';

type NextLinkProps = Pick<React.ComponentProps<typeof NextLink>, 'passHref'>;

type Props = { children: React.ReactNode; path: Path } & NextLinkProps &
  StyleProps;

export const InternalLink: React.FC<Props> = ({
  children,
  path,
  passHref,
  ...styleProps
}) => {
  return (
    <NextLink href={PATHS[path]} passHref={passHref}>
      <a css={getStyles(styleProps)}>{children}</a>
    </NextLink>
  );
};
