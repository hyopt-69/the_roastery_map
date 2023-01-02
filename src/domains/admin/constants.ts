import { AVATARS } from '@/assets/images';

import { Admin } from './types';

export const ADMIN_INFO: Record<Admin, { name: string; image: string }> = {
  Admin_1: { name: 'K Okayama', image: AVATARS.ADMIN_KO },
  Admin_2: { name: 'T Kono', image: AVATARS.ADMIN_TK },
};
