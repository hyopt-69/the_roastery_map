import { format as libFormat, formatDistance, isSameMonth } from 'date-fns';
import { ja } from 'date-fns/locale';

type Format = 'yyyy.MM.dd' | 'yyyy.MM' | 'yyyy年MM月dd日';

/**
 * Dateオブジェクトをフォーマットする。
 * @returns フォーマットされた日付の文字列
 */
export const getFormatDate = ({
  date,
  format = 'yyyy.MM.dd',
}: {
  date?: Date;
  format?: Format;
}) => {
  const formattedDate = libFormat(date || new Date(), format, { locale: ja });

  return formattedDate;
};

/**
 * 2時点間の経過期間(「N日前」等)を取得する。
 * @returns 経過期間を示す文字列
 */
export const getDateDistance = ({
  baseDate,
  targetDate,
}: {
  baseDate?: Date;
  targetDate: Date;
}) => {
  const dateDistance = formatDistance(targetDate, baseDate || new Date(), {
    locale: ja,
    addSuffix: true,
  });

  return dateDistance;
};

/**
 * 2時点間が同月かどうかを判定する。
 * @returns 判定結果
 */
export const getIsSameMonth = ({
  baseDate,
  targetDate,
}: {
  baseDate?: Date;
  targetDate: Date;
}) => {
  return isSameMonth(targetDate, baseDate || new Date());
};
