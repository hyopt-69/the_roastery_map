import { Admin } from '../admin/types';
import { Roaster } from '../roaster/types';

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

type AvailablePeriod = {
  // 開始日
  start: Date;
  // 終了日
  finish: Date;
};

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
  // コンテンツ(MD形式で本文の全て含む)
  contents: string;
  // ニュース内容の期限(イベントの開催日時や、キャンペーンの有効期限など)
  availablePeriod: Nullable<AvailablePeriod>;
  // ニュースに関連しているRoasterのid
  participateRoasters: Roaster['id'][];
};
