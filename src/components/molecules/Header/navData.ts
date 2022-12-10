import { IconPattern } from '@/assets/icons';
import { Path } from '@/constants/paths';

type HeaderPath = Extract<Path, 'HOME' | 'NEWS' | 'ABOUT'>;

export const NAV_LIST: HeaderPath[] = ['HOME', 'NEWS', 'ABOUT'];

export const NAV_ICONS: Record<HeaderPath, IconPattern> = {
  HOME: 'HOME',
  NEWS: 'NEWSPAPER',
  ABOUT: 'PROFILE',
};

export const NAV_LABELS: Record<HeaderPath, string> = {
  HOME: 'Home',
  NEWS: 'News',
  ABOUT: 'About',
};
