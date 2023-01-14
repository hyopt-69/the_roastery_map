import parser from 'html-react-parser';

import { options } from './options';

export const htmlParser: typeof parser = (html) => {
  return parser(html, options);
};
