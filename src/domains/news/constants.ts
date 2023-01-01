import { NewsCategory } from './types';

// 順番固定の配列
export const NEWS_CATEGORY_LIST: Readonly<NewsCategory[]> = [
  'All',
  'Event',
  'Recipe',
  'Report',
  'Other',
];

export const NEWS_CATEGORY_LABEL: Record<NewsCategory, string> = {
  All: 'All Posts',
  Event: 'Events',
  Recipe: 'Brew Recipes',
  Report: 'Shop Reports',
  Other: 'Others',
} as const;
