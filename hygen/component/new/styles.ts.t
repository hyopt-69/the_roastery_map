---
to: src/components/<%= directory %>/<%= name %>/styles.ts
unless_exists: true
---
import { css } from '@emotion/react';

export const styles = css({
  backgroundColor: 'white',
  color: 'black',
});
