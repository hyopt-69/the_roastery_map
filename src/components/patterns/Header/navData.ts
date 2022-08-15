import { IconPattern } from '@/app/assets/icons';
import { Path } from '@/app/constants/path';

export const NAV_LIST: Path[] = ['HOME', 'NEWS', 'ABOUT'];

export const NAV_ICONS: Record<Path, IconPattern> = {
  HOME: 'HOME',
  NEWS: 'BOOK',
  ABOUT: 'HELP_CIRCLE',
};

export const NAV_LABELS: Record<Path, string> = {
  HOME: 'HOME',
  NEWS: 'NEWS',
  ABOUT: 'ABOUT',
};
