import { IconPattern } from '@/app/assets/icons';
import { Path } from '@/app/constants/path';

type HeaderPath = Extract<Path, 'HOME' | 'NEWS' | 'ABOUT'>;

export const NAV_LIST: HeaderPath[] = ['HOME', 'NEWS', 'ABOUT'];

export const NAV_ICONS: Record<HeaderPath, IconPattern> = {
  HOME: 'HOME',
  NEWS: 'BOOK',
  ABOUT: 'HELP_CIRCLE',
};

export const NAV_LABELS: Record<HeaderPath, string> = {
  HOME: 'Home',
  NEWS: 'News',
  ABOUT: 'About',
};
