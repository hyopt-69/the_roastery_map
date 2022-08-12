import React from 'react';

import { Path } from '@/app/constants/path';

import { styles } from './styles';

type Props = {
  currentPath: Path;
};

// FIXME: そのうち実装(ハンバーガーメニュー的なのをつけたいかも...UX的に微妙なんで考え中)
export const MobileLayout: React.FC<Props> = ({ currentPath }) => {
  return (
    <div>
      <p>あああ</p>
    </div>
  );
};
