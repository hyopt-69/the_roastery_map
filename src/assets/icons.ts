import ARROW_LEFT from '@public/svg/arrow_left.svg';
import ARROW_RIGHT from '@public/svg/arrow_right.svg';
import BOOKMARK from '@public/svg/bookmark.svg';
import CALENDAR from '@public/svg/calendar.svg';
import CART from '@public/svg/cart.svg';
import CHECK from '@public/svg/check.svg';
import CIRCLE_CHECK from '@public/svg/circle_check.svg';
import CIRCLE_ERROR from '@public/svg/circle_error.svg';
import CIRCLE_INFORMATION from '@public/svg/circle_information.svg';
import CIRCLE_QUESTION from '@public/svg/circle_question.svg';
import CLOCK from '@public/svg/clock.svg';
import COMPUTER from '@public/svg/computer.svg';
import DOTS from '@public/svg/dots.svg';
import EQUALIZER from '@public/svg/equalizer.svg';
import HEART from '@public/svg/heart.svg';
import HOME from '@public/svg/home.svg';
import INSTAGRAM from '@public/svg/instagram.svg';
import MENU from '@public/svg/menu.svg';
import MOON from '@public/svg/moon.svg';
import NEWSPAPER from '@public/svg/newspaper.svg';
import PIN from '@public/svg/pin.svg';
import PROFILE from '@public/svg/profile.svg';
import SEARCH from '@public/svg/search.svg';
import SUN from '@public/svg/sun.svg';
import TWITTER from '@public/svg/twitter.svg';
import X from '@public/svg/x.svg';

// NOTE: 以下から拝借
// - https://remixicon.com/

export const ICONS = {
  ARROW_LEFT,
  ARROW_RIGHT,
  BOOKMARK,
  CALENDAR,
  CART,
  CHECK,
  CIRCLE_CHECK,
  CIRCLE_ERROR,
  CIRCLE_INFORMATION,
  CIRCLE_QUESTION,
  CLOCK,
  COMPUTER,
  DOTS,
  EQUALIZER,
  HEART,
  HOME,
  INSTAGRAM,
  MENU,
  MOON,
  NEWSPAPER,
  PIN,
  PROFILE,
  SEARCH,
  SUN,
  TWITTER,
  X,
} as const;

export type IconPattern = keyof typeof ICONS;
