import { Admin } from '../admin/types';
import { Shop } from '../shop/types';

type Category =
  // ショップレポート
  | 'Report'
  // イベント告知
  | 'Event'
  // レシピ
  | 'Recipe'
  // その他
  | 'Other';

type Period = {
  // 開始日
  start: Date;
  // 終了日
  end: Date;
};

export type News = {
  newsID: string;
  // タイトル
  title: string;
  // サムネイル写真
  thumbImage: string;
  // カテゴリー
  category: Category;
  // 投稿日
  createdAt: string;
  // 投稿者
  author: Admin;
  // コンテンツ(MD形式で本文の全て含む)
  article: string;
  // ニュース内容の期限(イベントの開催日時や、キャンペーンの有効期限など)
  period: Nullable<Period>;
  // ニュースに関連しているお店のid
  participants: Shop[];
};
