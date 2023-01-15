import React from 'react';

import { Label } from '@/components/atoms/Label';
import { TertiaryButton } from '@/components/atoms/TertiaryButton';

import { styles } from './styles';

type Props = {
  onClickResetButton: () => void;
};

export const NewsListEmptyContent: React.FC<Props> = ({
  onClickResetButton,
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.textsWrapper}>
        <Label mqSizes={['xs', 's']} weight="bold">
          一致する検索結果がありません
        </Label>
        <Label mqSizes={['xxxs', 'xxs']}>
          カテゴリーや、検索ワードの変更をお試しください。
        </Label>
      </div>
      <TertiaryButton
        isOutlined
        iconPattern="EQUALIZER"
        onClick={onClickResetButton}
      >
        検索結果をリセット
      </TertiaryButton>
    </div>
  );
};
