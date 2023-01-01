import { AVATARS } from '@/assets/images';

import { Admin } from './types';

export const ADMIN_INFO: Record<Admin, { name: string; image: string }> = {
  'K.O': { name: 'K Okayama', image: AVATARS.ADMIN_KO },
  'T.K': { name: 'T Kono', image: AVATARS.ADMIN_TK },
};
