import React, { useRef, useCallback, useState, useEffect } from 'react';

import { ActionButton } from '@/components/parts/ActionButton';

import { styles, getButtonWrapperStyle } from './styles';

type Props = {
  children: React.ReactNode[];
};

export const ScrollContainer: React.FC<Props> = ({ children }) => {
  const wrapperRef = useRef<React.ElementRef<'ul'>>(null);
  const firstItemRef = useRef<React.ElementRef<'li'>>(null);
  const lastItemRef = useRef<React.ElementRef<'li'>>(null);
  const [isVisibleBackButton, setIsVisibleBackButton] = useState(false);
  const [isVisibleNextButton, setIsVisibleNextButton] = useState(false);

  const scrollToStart = useCallback(() => {
    firstItemRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  }, []);

  const scrollToEnd = useCallback(() => {
    lastItemRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'end',
    });
  }, []);

  // NOTE: scroll量に応じて、ボタンの表示を切り替える。
  const handleDisplayButtons = useCallback(() => {
    const wrapperRect = wrapperRef.current?.getBoundingClientRect();
    if (!wrapperRect) return;
    const { right, left } = wrapperRect;

    // backButtonの処理
    const firstItemRect = firstItemRef.current?.getBoundingClientRect();
    if (firstItemRect) {
      const firstItemCenter = firstItemRect.left + firstItemRect.width / 2;
      if (firstItemCenter < left) setIsVisibleBackButton(true);
      if (firstItemCenter >= left) setIsVisibleBackButton(false);
    }

    // nextButtonの処理
    const lastItemRect = lastItemRef.current?.getBoundingClientRect();
    if (lastItemRect) {
      const lastItemCenter = lastItemRect.right - lastItemRect.width / 2;
      if (lastItemCenter > right) setIsVisibleNextButton(true);
      if (lastItemCenter <= right) setIsVisibleNextButton(false);
    }
  }, []);

  useEffect(() => {
    handleDisplayButtons();
  }, [handleDisplayButtons]);

  return (
    <div css={styles.container}>
      <div css={getButtonWrapperStyle(isVisibleBackButton).backButtonWrapper}>
        <ActionButton pattern="back" size="s" onClick={scrollToStart} />
      </div>
      <ul
        ref={wrapperRef}
        css={styles.listWrapper}
        onScroll={handleDisplayButtons}
      >
        {children.map((child, i) => {
          if (i === 0) {
            return (
              <li ref={firstItemRef} key={i}>
                {child}
              </li>
            );
          }
          if (i === children.length - 1) {
            return (
              <li ref={lastItemRef} key={i}>
                {child}
              </li>
            );
          }
          return <li key={i}>{child}</li>;
        })}
      </ul>
      <div css={getButtonWrapperStyle(isVisibleNextButton).nextButtonWrapper}>
        <ActionButton pattern="next" size="s" onClick={scrollToEnd} />
      </div>
    </div>
  );
};
