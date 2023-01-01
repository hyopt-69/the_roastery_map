import { css } from '@emotion/react';

import {
  DEFAULT_BUTTON_HEIGHT,
  DEFAULT_HEADER_HEIGHT,
} from '@/constants/sizes';
import { borderRadiuses } from '@/theme/borderRadius';
import { borderWidths } from '@/theme/borderWidths';
import { Color, colors } from '@/theme/colors';
import { durations } from '@/theme/durations';
import { spaces } from '@/theme/spaces';

export const getStyles = () => {
  const container = css({
    display: 'flex',
    flex: 1,
  });

  const menuWrapper = css({
    position: 'sticky',
    top: DEFAULT_HEADER_HEIGHT.MEDIUM,
    display: 'flex',
    flex: 1,
    height: 'fit-content',
    flexDirection: 'column',
    paddingRight: spaces.l,
    paddingBlock: spaces.l,
  });

  const menuItem = (isActive: boolean) => {
    const activeColor: Color = 'mirage';

    return css({
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: spaces.xs,
      height: DEFAULT_BUTTON_HEIGHT.MEDIUM,
      borderStyle: 'solid',
      borderRadius: borderRadiuses.s,
      borderWidth: borderWidths.l,
      borderColor: colors.white,
      paddingLeft: spaces.s,
      transitionDuration: durations.s,

      ...(isActive && {
        backgroundColor: colors.grayNurse,
        p: {
          color: colors[activeColor],
        },
      }),
      ...(!isActive && {
        ':hover': {
          backgroundColor: colors.blackHaze,
          p: {
            color: colors[activeColor],
          },
        },
      }),
    });
  };

  return {
    container,
    menuWrapper,
    menuItem,
  };
};
