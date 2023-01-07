import { News } from './types';

// 順番固定の配列
export const NEWS_CATEGORY_LIST: Readonly<SelectableAll<News['category']>[]> = [
  'All',
  'Event',
  'Recipe',
  'Report',
  'Other',
];

export const NEWS_CATEGORY_LABEL: Record<
  SelectableAll<News['category']>,
  string
> = {
  All: 'All Posts',
  Event: 'Events',
  Recipe: 'Brew Recipes',
  Report: 'Shop Reports',
  Other: 'Others',
} as const;

export const NEWS_CATEGORY_DESCRIPTION: Record<
  SelectableAll<News['category']>,
  string
> = {
  All: 'すべての投稿',
  Event: 'コーヒーに関するイベントの情報',
  Other: 'その他のいろいろなお知らせ',
  Recipe: 'おすすめの抽出レシピの紹介',
  Report: 'おすすめのコーヒーショップの紹介',
};
