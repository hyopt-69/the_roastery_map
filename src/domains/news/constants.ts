import { NewsCategory } from './types';

export const NEWS_CATEGORY_LABEL: Record<NewsCategory, string> = {
  All: 'all',
  Event: 'event',
  Recipe: 'recipe',
  Report: 'report',
  Other: 'other',
} as const;
