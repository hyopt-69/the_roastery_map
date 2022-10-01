import { format as libFormat, formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';

type Format = 'YYYY.MM.DD';

/**
 * "今"のDateオブジェクトを生成する。
 * @returns "今"のDateオブジェクト
 */
export const getNow = () => new Date();

/**
 * Dateオブジェクトをフォーマットする。
 * @returns フォーマットされた日付の文字列
 */
export const formatDate = ({
  date = getNow(),
  format = 'YYYY.MM.DD',
}: {
  date?: Date;
  format?: Format;
}) => {
  const formattedDate = libFormat(date, format, { locale: ja });

  return formattedDate;
};

/**
 * 2時点間の経過期間(「N日前」等)を取得する。
 * @returns 経過期間を示す文字列
 */
export const getDateDistance = ({
  startDate = getNow(),
  baseDate,
}: {
  startDate?: Date;
  baseDate: Date;
}) => {
  const dateDistance = formatDistance(startDate, baseDate, {
    locale: ja,
    addSuffix: true,
  });

  return dateDistance;
};
