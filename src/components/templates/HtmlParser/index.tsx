import React from 'react';

import { htmlParser } from '@/libs/htmlReactParser/parser';

import { styles } from './styles';

type Props = {
  html: string;
};

export const HtmlParser: React.FC<Props> = ({ html }) => {
  return <div css={styles.container}>{htmlParser(html)}</div>;
};
