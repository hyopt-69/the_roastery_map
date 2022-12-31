import { css } from '@emotion/react';

import { colors } from '@/theme/colors';

type AvatarSize = 's' | 'm' | 'l';

const AVATAR_SIZE: Record<AvatarSize, number> = {
  s: 24,
  m: 32,
  l: 48,
} as const;

export type StyleProps = {
  size?: AvatarSize;
};

export const getStyles = ({ size = 'm' }: StyleProps) => {
  const container = css({
    backgroundColor: colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: AVATAR_SIZE[size],
    aspectRatio: '1',
    borderRadius: '50%',
    overflow: 'hidden',
  });

  return { container };
};
