import { css } from '@emotion/react';

import { colors } from '@/theme/colors';

type AvatarSize = 's' | 'm' | 'l';

export type StyleProps = {
  size?: AvatarSize;
};

const AVATAR_SIZE: Record<AvatarSize, number> = {
  s: 40,
  m: 80,
  l: 120,
} as const;

export const getStyles = ({ size = 'm' }: StyleProps) => {
  return {
    container: css({
      backgroundColor: colors.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: AVATAR_SIZE[size],
      aspectRatio: '1',
      borderRadius: '50%',
      overflow: 'hidden',
    }),
  };
};
