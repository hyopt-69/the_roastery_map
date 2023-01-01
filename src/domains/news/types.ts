import { Admin } from '../admin/types';

export type NewsCategory =
  // すべて
  | 'All'
  // ショップレポート
  | 'Report'
  // イベント告知
  | 'Event'
  // レシピ
  | 'Recipe'
  // その他
  | 'Other';

export type News = {
  id: string;
  // タイトル
  title: string;
  // サムネイル写真
  thumbImage: string;
  // カテゴリー
  category: Exclude<NewsCategory, 'All'>;
  // 投稿日
  createdAt: string;
  // 投稿者
  author: Admin;
};
