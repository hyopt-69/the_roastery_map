import React from 'react';

import { getStyles, StyleProps } from './styles';

type AProps = Pick<React.ComponentProps<'a'>, 'children' | 'href'>;

type Props = AProps & StyleProps;

export const ExternalLink: React.FC<Props> = ({
  children,
  href,
  ...styleProps
}) => {
  return (
    <a href={href} css={getStyles(styleProps)} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
