import BOOK from '@public/svg/book.svg';
import CALENDAR from '@public/svg/calendar.svg';
import CHEVRON_LEFT from '@public/svg/chevronLeft.svg';
import CHEVRON_RIGHT from '@public/svg/chevronRight.svg';
import DOTS from '@public/svg/dots.svg';
import HELP_CIRCLE from '@public/svg/helpCircle.svg';
import HOME from '@public/svg/home.svg';
import INSTAGRAM from '@public/svg/instagram.svg';
import MAP from '@public/svg/map.svg';
import MENU from '@public/svg/menu.svg';
import MONITOR from '@public/svg/monitor.svg';
import MOON from '@public/svg/moon.svg';
import SEARCH from '@public/svg/search.svg';
import SHOPPING_CART from '@public/svg/shoppingCart.svg';
import SLIDERS from '@public/svg/sliders.svg';
import SUN from '@public/svg/sun.svg';
import X from '@public/svg/x.svg';

// NOTE: https://feathericons.com/ から取得

export const ICONS = {
  X,
  CHEVRON_LEFT,
  CHEVRON_RIGHT,
  BOOK,
  CALENDAR,
  DOTS,
  INSTAGRAM,
  MAP,
  MONITOR,
  MOON,
  SUN,
  SHOPPING_CART,
  SLIDERS,
  SEARCH,
  HELP_CIRCLE,
  HOME,
  MENU,
} as const;

export type IconPattern = keyof typeof ICONS;
