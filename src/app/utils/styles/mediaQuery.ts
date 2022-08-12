import facepaint from 'facepaint';

import { breakPoints } from '@/app/theme/breakPoints';

export const mq = facepaint(
  Object.values(breakPoints).map((bp) => `@media (min-width: ${bp}px)`)
);
