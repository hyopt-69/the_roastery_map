import { Prefecture } from '@/constants/prefectures';
import { WeekDay } from '@/constants/weekDay';

type RoastingDepth =
  // 浅煎り
  | 'light'
  // 深煎り
  | 'dark';

type SmokingAvailability =
  // 完全禁煙
  | 'noSmokable'
  // 分煙
  | 'separateSmokable'
  // 全席喫煙可能
  | 'smokable';

type BrewingMethods =
  // ペーパードリップ
  | 'paperDrip'
  // エスプレッソ
  | 'espresso'
  // エアロプレス
  | 'aeroPress'
  // ネルドリップ
  | 'flannelDrip'
  // サイフォン
  | 'siphon'
  // 水出しコーヒー
  | 'coldBlew';

type ChargingAvailability =
  // 充電不可
  | 'noChargeable'
  // 充電可能
  | 'chargeable';

type PhysicalStoreAvailability =
  // 実店舗なし(オンラインショッピングやイベント出店のみ)
  | 'noPresent'
  // 実店舗あり
  | 'present';

type SeatingAvailability =
  // テーブル席がメイン
  | 'TableSeats'
  // カウンター・ベンチなどテーブルのない席がメイン
  | 'OnlySeats'
  // 席が全く無い
  | 'noSeat';

type WholeSaler = {
  name: string;
  websiteURL: Nullable<string>;
};

type DailySchedule = {
  // オープン時間
  open: string;
  // クローズ時間
  close: string;
};

export type Roaster = {
  id: string;
  // 店名
  name: string;
  // 店名(カタカナ)
  nameKatakana: string;
  // サムネイル写真
  thumbImage: string;
  // 店舗の写真
  images: [string, ...string[]];
  // 住所
  address: string;
  // 住所(都道府県)
  prefecture: Prefecture;
  // ウェブサイトURL
  websiteUrl: Nullable<string>;
  // インスタグラムURL
  instagramUrl: Nullable<string>;
  // 店舗の紹介文
  introduction: string;
  // 店舗の開業日
  openingDate: Nullable<Date>;
  // 店舗の閉業日
  closedDate: Nullable<Date>;
  // 週間の営業日程
  weeklySchedule: Record<WeekDay, Nullable<DailySchedule>>;
  // 定休日(隔週などの週単位以外)
  holiday: string;
  // メインの焙煎度合い
  roastingDepth: RoastingDepth;
  // 抽出方法
  brewingMethods: BrewingMethods[];
  // 卸先情報
  wholeSalers: WholeSaler[];
  // 喫煙の可否
  smokingAvailability: SmokingAvailability;
  // 充電できるかどうか
  chargingAvailability: ChargingAvailability;
  // 実店舗があるかどうか
  physicalStoreAvailability: PhysicalStoreAvailability;
  // 店舗内にどのような座席があるか
  seatingAvailability: SeatingAvailability;
};
