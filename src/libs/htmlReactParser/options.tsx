import { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser';
import React from 'react';

import { Body } from '@/components/atoms/Body';
import { ExternalLink } from '@/components/atoms/ExternalLink';
import { Label } from '@/components/atoms/Label';
import { Title } from '@/components/atoms/Title';

export const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (!(domNode instanceof Element) || !domNode.attribs) return null;

    const reactDom = domToReact(domNode.children, options);

    switch (domNode.name) {
      case 'h2':
        return (
          <Title size="l" Tag="h2">
            {reactDom}
          </Title>
        );
      case 'h3':
        return (
          <Title size="m" Tag="h3">
            {reactDom}
          </Title>
        );
      case 'p':
        return <Body size="s">{reactDom}</Body>;
      case 'a':
        return (
          <ExternalLink size="s" {...domNode.attribs}>
            {reactDom}
          </ExternalLink>
        );
      case 'li':
        return (
          <li>
            <Label size="s">{reactDom}</Label>
          </li>
        );
      case 'img':
        return <img {...domNode.attribs} width="100%" height="auto" />;
      default:
        return undefined;
    }
  },
};
