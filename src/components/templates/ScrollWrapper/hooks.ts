import { useRef, useState, useCallback, useEffect } from 'react';

export const useScrollWrapper = () => {
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

  const getItemRef = ({
    isFirst,
    isLast,
  }: {
    isFirst: boolean;
    isLast: boolean;
  }) => {
    if (isFirst) return firstItemRef;
    if (isLast) return lastItemRef;
    return undefined;
  };

  useEffect(() => {
    handleDisplayButtons();
  }, [handleDisplayButtons]);

  return {
    wrapperRef,
    firstItemRef,
    lastItemRef,
    isVisibleBackButton,
    isVisibleNextButton,
    getItemRef,
    scrollToStart,
    scrollToEnd,
    handleDisplayButtons,
  };
};
