---
to: src/components/pages/<%= directory %>/<%= name %>/styles.ts
unless_exists: true
---
import { css } from '@emotion/react';

export const styles = {
  container: css({
    backgroundColor: 'white',
    color: 'black',
  }),
};
