import { css } from '@emotion/react';

export type StyleProps = {
  gapSpace?: number;
  edgeSpace?: number;
  isFluidLayout?: boolean;
};

export const getStyles = ({
  gapSpace,
  edgeSpace,
  isFluidLayout,
}: StyleProps) => {
  return {
    carouselWrapper: css({
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden',

      gap: gapSpace,
      paddingLeft: edgeSpace,
      paddingRight: edgeSpace,

      div: {
        cursor: 'pointer',
        ...(isFluidLayout && {
          flexBasis: '100%',
          flexShrink: 0,
        }),
      },
    }),
  };
};
