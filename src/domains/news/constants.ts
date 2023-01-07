import { News } from './types';

// 順番固定のカテゴリー
export const NEWS_CATEGORY_LIST: Readonly<Select<News['category']>[]> = [
  'UnSelect',
  'Event',
  'Recipe',
  'Report',
  'Other',
];

export const NEWS_CATEGORY_LABEL: Record<Select<News['category']>, string> = {
  UnSelect: 'All Posts',
  Event: 'Events',
  Recipe: 'Brew Recipes',
  Report: 'Shop Reports',
  Other: 'Others',
} as const;

export const NEWS_CATEGORY_DESCRIPTION: Record<
  Select<News['category']>,
  string
> = {
  UnSelect: 'すべての投稿',
  Event: 'コーヒーに関するイベントの情報',
  Other: 'その他のいろいろなお知らせ',
  Recipe: 'おすすめの抽出レシピの紹介',
  Report: 'おすすめのコーヒーショップの紹介',
};
